import "/node_modules/jquery/dist/jquery.js";
document.addEventListener("DOMContentLoaded", () => {
    // Ajouter un li au ul présent dans la page
    // En js
    let lis = document.querySelectorAll("li");
    for (let e of lis) {
        e.addEventListener("click", () => {
            e.style.textDecoration = "line-through";
        });
    }
    ;
    // en jquery
    $("li").on("click", function () {
        $(this).css("text-decoration", 'line-through');
    });
    document.querySelector("#heure").innerHTML = new Date().addDays(7).toDateString();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLHFDQUFxQyxDQUFBO0FBSTVDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBQyxHQUFFLEVBQUU7SUFHN0MsMkNBQTJDO0lBQzNDLFFBQVE7SUFDUixJQUFJLEdBQUcsR0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsR0FBRSxFQUFFO1lBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFDLGNBQWMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0lBRUYsWUFBWTtJQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO1FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQU9QLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFFLENBQUMsU0FBUyxHQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBRXJGLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVhdHJlNCAsVm9pdHVyZX0gZnJvbSBcIi4vbW9kZWxzL2luZGV4LmpzXCI7XHJcbmltcG9ydCAqIGFzIG1vZGVscyBmcm9tIFwiLi9tb2RlbHMvaW5kZXguanNcIjtcclxuaW1wb3J0IFwiL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcIlxyXG5cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57XHJcbiAgICBcclxuXHJcbiAgICAvLyBBam91dGVyIHVuIGxpIGF1IHVsIHByw6lzZW50IGRhbnMgbGEgcGFnZVxyXG4gICAgLy8gRW4ganNcclxuICAgIGxldCBsaXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgZm9yKGxldCBlIG9mIGxpcyl7XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICBlLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibGluZS10aHJvdWdoXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGVuIGpxdWVyeVxyXG4gICAgJChcImxpXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKXtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcInRleHQtZGVjb3JhdGlvblwiLCdsaW5lLXRocm91Z2gnKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGV1cmVcIikhLmlubmVySFRNTD1uZXcgRGF0ZSgpLmFkZERheXMoNykudG9EYXRlU3RyaW5nKCk7XHJcblxyXG59KTsiXX0=
