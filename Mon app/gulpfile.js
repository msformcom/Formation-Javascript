// npm init
// npm install gulp -D
const gulp=require("gulp");
// compilateur de ts
const ts=require("gulp-typescript");
// Générateur de sourcemaps
const sourcemaps=require("gulp-sourcemaps");
// compilateur de fichiers scss
const sass=require('gulp-sass')(require('sass'));
// Lancer le server automatiquement + relancer en cas de changement
const nodemon=require("gulp-nodemon");

const browserSync=require("browser-sync");

const proxyBS=browserSync.create();

proxyBS.init({
    proxy:"http://localhost:4200"
})

// Création d'un compilateur basé su 
const compilateur=ts.createProject("./client/tsconfig.json");

const paths={
    outDir:"./client/dev",
    staticFiles:"./client/src/**/*{.html,.js,.css}",
    tsFiles:"./client/src/**/*.ts",
    scssFiles:"./client/src/**/*.scss"
}


// Définir une tache
gulp.task("staticFilesCopy",()=>{
    return gulp.src(paths.staticFiles)
        // pipe => appliquer une opération
        .pipe(gulp.dest(paths.outDir))
        // rechargement des pages html
        .pipe(proxyBS.stream());
});
gulp.task("compileTS",()=>{
    return gulp.src(paths.tsFiles)
            // enregistrement d'indicateurs dans le fichiers ts
            .pipe(sourcemaps.init())
            // compilation ts
            .pipe(compilateur())
            // Ecriture des sourcemaps dans les fichier
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.outDir))
            .pipe(proxyBS.stream());
});

gulp.task("compileScss",()=>{
    return gulp.src(paths.scssFiles)
         .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.outDir))
        .pipe(proxyBS.stream());
})
// watch et traitement des fichiers sur modification
gulp.task("startDev", (cb)=>{
    nodemon({script:"./server/mon-server.js"});
    gulp.parallel(["staticFilesCopy","compileTS","compileScss"])
    gulp.watch(paths.staticFiles,gulp.series(["staticFilesCopy"]));
    gulp.watch(paths.tsFiles,gulp.series(["compileTS"]));
    gulp.watch(paths.scssFiles,gulp.series(["compileScss"]));
    // cb(); cb permet de signaler à gulp qu'une tache est terminée
});

