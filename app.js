const posts = [
	{
		name: "Tanya Sinclair",
		post: "UX Engineer",
		quote:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
		image: "./images/image-tanya.jpg",
	},
	{
		name: "John Tarkpor",
		post: "Junior Front-end Developer",
		quote:
			"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
		image: "./images/image-john.jpg",
	},
];

const prevBtn = document.querySelector("#prev-btn");
prevBtn.addEventListener("click", () => navigator.prev());
const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener("click", () => navigator.next());

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight") {
		navigator.next();
	} else if (event.key === "ArrowLeft") {
		navigator.prev();
	}
});

const image = document.querySelector("#image");
const quote = document.querySelector("#quote");
const name = document.querySelector("#name");
const post = document.querySelector("#post");

function navigatePosts() {
	let current = 0;
	return {
		next: () => {
			if (current < posts.length - 1) {
				current++;
			} else {
				current = 0;
			}
			updatePosts(current);
		},
		prev: () => {
			if (current > 0) {
				current--;
			} else {
				current = posts.length - 1;
			}
			updatePosts(current);
		},
	};
}

const navigator = navigatePosts();

function updatePosts(index) {
	image.src = posts[index].image;
	quote.innerText = posts[index].quote;
	name.innerText = posts[index].name;
	post.innerText = posts[index].post;
}
