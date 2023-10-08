const getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles);  //HTML Collection
const getactivecontents = document.querySelectorAll('.acccontent');
// console.log(getactivecontents); //NoteList


// console.log(getacctitles[0]);
// console.log(getacctitles[1]);
// console.log(getacctitles[2]);
// console.log(getacctitles[3]);

// console.log(getacctitles.length); //4

for(x=0; x < getacctitles.length; x++){
    // console.log(x);
    // console.log(getacctitles[x]);

    getacctitles[x].addEventListener('click',function(e){
        // console.log('hay');
        // console.log(e);
        // console.log(e.target);  //pointer နှိပ်လိုက် တဲ့ Element ကိုလိုချင်ရင် သုံးတယ်
        // console.log(this);  //pointer က ဘာနှိပ်လိုက်တာလဲသိချင်ရင် သုံးတယ်

        // e.target.classList.toggle('active');
        this.classList.toggle('active');

        const getcontent = this.nextElementSibling;
        
        // console.log(getcontent);

        // getcontent.style.height = "100px";

        // console.log(getcontent.scrollHeight + "px");

        // getcontent.style.height = getcontent.scrollHeight + "px";
        if(getcontent.style.height){
            // remove

            getcontent.style.height = null;  //beware can't set 0
        }else{
            // add

            getcontent.style.height = getcontent.scrollHeight + "px";
        }


    });

    if(getacctitles[x].classList.contains('active')){
        getactivecontents[x].style.height = getactivecontents[x].scrollHeight+"px";

    }
    
}





// 25GA
