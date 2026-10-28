const playlist = ["Өглөө", "Бороо", "Од"];
const song = "fuh";

if (playlist.includes(song)) {
  console.log(`⚠️ «${song}» аль хэдийн байна`);
} else {
  playlist.push(song);
  console.log(`✅ «${song}» нэмэгдлээ`);
}

console.log(`🎵 ${playlist.join(" · ")}`);
