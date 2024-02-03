const testimonials = [
  {
    name: "Sharline U",
    photoUrl: "user.jpg",
    text: "Thanks Apple! I'd be lost without Apple. Apple did exactly what you said it does. I will refer everyone I know."
  },
  {
    name: "Ilene X",
    photoUrl: "user2.jpg",
    text: "I am really satisfied with my Apple. Apple is the real deal! If you aren't sure, always go for Apple."
  },
  {
  name: "Renaud Z",
  photoUrl: "user3.jpg",
  text: "I would be lost without Apple. I was amazed at the quality of Apple. I didn't even need training."
  }
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

function updateTestimonial(){
  const {name, photoUrl, text} = testimonials[idx]
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
   idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
updateTestimonial();
