addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".questn a").forEach((aTag) => {
        aTag.onclick = () => {
            const num = aTag.dataset.no
            console.log(`i clicked ${num}`);
        };
    });
});