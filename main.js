const profile_photo = document.querySelector(".profile-photo");
const location_desc = document.querySelector(".location");
const repos_info = document.querySelector(".repos");
const follower_info = document.querySelector(".follower");
const following_info = document.querySelector(".following");
const name_desc = document.querySelector(".name");
const bio_desc = document.querySelector(".bio");
const twitter_btn = document.querySelector(".twitter");
const instagram_btn = document.querySelector(".instagram");
const github_btn = document.querySelector(".github");

const username = "enesc54"

const insta_url = "https://www.instagram.com/enescxx_?igsh=MTJkMTU5ODltMWFnbA==";
const twitter_url = "";
const github_url = "https://github.com/enesc54";

async function getUser(_userName) {
    const result = await fetch("https://api.github.com/users/" + _userName, {
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json",
        },
    });
    const _data = await result.json();

    document.title = _data.name;
    profile_photo.src = _data.avatar_url;
    location_desc.textContent = _data.location;
    repos_info.textContent = _data.public_repos;
    follower_info.textContent = _data.followers;
    following_info.textContent = _data.following;
    name_desc.textContent = _data.name;
    bio_desc.textContent = _data.bio;
    instagram_btn.href = insta_url;
    twitter_btn.href = twitter_url;
    github_btn.href = github_url;
}

getUser(username);
