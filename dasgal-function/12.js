function reverseLine(names) {
  for (let i = -1; i > names.length; i--) {
    if (names === "") {
      console.log("baihgu");
    }
    console.log(reverseLine[names]);
  }
}
reverseLine(["Бат", "Сараа", "Ану", "Болд"]);
reverseLine(["Өглөө", "Өдөр"]);
reverseLine([]);
