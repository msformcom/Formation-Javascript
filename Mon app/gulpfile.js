// npm init
// npm install gulp -D
const gulp=require("gulp");
// compilateur de ts
const ts=require("gulp-typescript");
// Générateur de sourcemaps
const sourcemaps=require("gulp-sourcemaps");
// compilateur de fichiers scss
const sass=require('gulp-sass')(require('sass'));

// Création d'un compilateur basé su 
const compilateur=ts.createProject("./client/tsconfig.json");

// Définir une tache
gulp.task("HtmlAndjsFileCopy",()=>{
    return gulp.src("./client/src/**/*{.html,.js,.css}")
        // pipe => appliquer une opération
        .pipe(gulp.dest("./client/dev"));
});
gulp.task("compileTS",()=>{
    return gulp.src("./client/src/**/*.ts")
            // enregistrement d'indicateurs dans le fichiers ts
            .pipe(sourcemaps.init())
            // compilation ts
            .pipe(compilateur())
            // Ecriture des sourcemaps dans les fichier
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("./client/dev"));
});

gulp.task("compileScss",()=>{
    return gulp.src("./client/src/**/*.scss")
         .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./client/dev"));
})