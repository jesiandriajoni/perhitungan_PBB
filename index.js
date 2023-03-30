function hitungPBB() {

  //menampung inputan user
  var luasTanah = parseFloat(document.getElementById("luasTanah").value);
  var luasBangunan = parseFloat(document.getElementById("luasBangunan").value);
  var njopTanah = parseFloat(document.getElementById("njopTanah").value);
  var njopBangunan = parseFloat(document.getElementById("njopBangunan").value);

  //matematika harga tanah dan bangunan
  var hargaTanah = luasTanah * njopTanah;
  var hargaBangunan = luasBangunan * njopBangunan;

  //menghitung njkp dan njoptkp
  var njkp = 0.2 * (hargaTanah + hargaBangunan);
  var njoptkp = 12000000;

  // menghitung pbb
  var pbb = ((njkp - njoptkp) * 0.005) - 15000;

  document.getElementById("hasilPBB").innerHTML = "jumlah PBB yang harus dibayar : Rp." + pbb.toFixed(2);
}


