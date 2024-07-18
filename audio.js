const loveIcons = document.querySelectorAll('.love-icon');

loveIcons.forEach(loveIcon => {
    loveIcon.addEventListener('click', togglePlaylist);
});

function togglePlaylist(event) {
    const clickedIcon = event.target;
    const songCard = clickedIcon.closest('.movie');
    const audioSource = songCard.querySelector('.song-audio source').getAttribute('src');
    const loveIcon = songCard.querySelector('.love-icon');

    if (!songCard.classList.contains('song-added')) {
        // Add the song to the playlist
        addToPlaylist(songCard, audioSource);

        // Change the love icon to solid
        loveIcon.classList.remove('far');
        loveIcon.classList.add('fas');
        songCard.classList.add('song-added');
    } else {
        // Remove the song from the playlist
        removeFromPlaylist(songCard);

        // Change the love icon to hollow
        loveIcon.classList.remove('fas');
        loveIcon.classList.add('far');
        songCard.classList.remove('song-added');
    }
}

// Rest of the addToPlaylist and removeFromPlaylist functions remain the same







function validateSignup() {
    var username = document.forms["signupForm"]["username"].value;
    var password = document.forms["signupForm"]["password"].value;
    var email = document.forms["signupForm"]["email"].value;

    if (username === "" || password === "" || email === "") {
      alert("Please enter all the required fields");
      return false;
    }

    var existingUsernames = ['user1', 'user2', 'user3'];
    if (existingUsernames.includes(username)) {
      alert("Username already exists. Please choose a different username");
      return false;
    }

    var existingEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
    if (existingEmails.includes(email)) {
      alert("Email already exists. Please enter a different email address");
      return false;
    }

    // If all validations pass, you can proceed with submitting the form
    return true;
}


function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username === "" || password === "") {
      alert("Please enter both username and password");
      return false;
    }
    
    // Your login validation logic goes here
    // For example:
    if (username !== "admin" || password !== "password") {
      alert("Incorrect username or password");
      return false;
    }

    return true;
}




document.addEventListener("DOMContentLoaded", function() {
  const playButtons = document.querySelectorAll(".play-button");
  let currentAudio = null;

  playButtons.forEach((playButton) => {
    playButton.addEventListener("click", function() {
      // Pause and hide all audio players
      const audioPlayers = document.querySelectorAll(".audio-player");
      audioPlayers.forEach((audioPlayer) => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset the audio time to 0
        audioPlayer.classList.add("d-none");
      });

      // Get the corresponding audio element for this play button
      const audioId = playButton.getAttribute("data-audio-id");
      const audioElement = document.getElementById(audioId);

      // Show the audio element and play the music
      audioElement.classList.remove("d-none");
      audioElement.play();

      // Update the currentAudio variable
      currentAudio = audioElement;
    });
  });
});
