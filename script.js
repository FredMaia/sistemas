function calcular1 () {
  let a11 = document.getElementById("a11").value;
  let a12 = document.getElementById("a12").value;
  let a13 = document.getElementById("a13").value;
  let a21 = document.getElementById("a21").value;
  let a22 = document.getElementById("a22").value;
  let a23 = document.getElementById("a23").value;
  let res = document.getElementById("res")
  if (a11.length === 0 || a12.length === 0 || a13.length === 0 || a21.length === 0 || a22.length === 0 || a23.length === 0) {
    alert("prestenção sô")
  } else {
    let D = (a11*a22) - (a12*a21)
    if (D != 0) {
      let DX = (a13*a22) - (a12*a23)
      let DY = (a11*a23) - (a13*a21)
      
      let x = DX / D
      let y = DY / D

      res.innerHTML = `x = ${x.toFixed(1)}, y = ${y.toFixed(1)}`

    } else {
      res.innerHTML = "Sistema impossível ou sistema possível indeterminado"
    }
  }
}

function calcular2 () {
  let Sa11 = document.getElementById("Sa11").value;
  let Sa12 = document.getElementById("Sa12").value;
  let Sa13 = document.getElementById("Sa13").value;
  let Sa14 = document.getElementById("Sa14").value;
  let Sa21 = document.getElementById("Sa21").value;
  let Sa22 = document.getElementById("Sa22").value;
  let Sa23 = document.getElementById("Sa23").value;
  let Sa24 = document.getElementById("Sa24").value;
  let Sa31 = document.getElementById("Sa31").value;
  let Sa32 = document.getElementById("Sa32").value;
  let Sa33 = document.getElementById("Sa33").value;
  let Sa34 = document.getElementById("Sa34").value;

  let res2 = document.getElementById("res2")
  if (Sa11.length === 0 || Sa12.length === 0 || Sa13.length === 0 || Sa21.length === 0 ||Sa22.length === 0 || Sa23.length === 0) {
    alert("prestenção sô")
  } else {
    let D = (Sa11*Sa22*Sa33 + Sa12*Sa23*Sa31 + Sa13*Sa21*Sa32) - (Sa13*Sa22*Sa31 + Sa11*Sa23*Sa32 + Sa12*Sa21*Sa33)

    if (D != 0) {
      let DX = (Sa14*Sa22*Sa33 + Sa12*Sa23*Sa34 + Sa13*Sa24*Sa32) - (Sa13*Sa22*Sa34 + Sa14*Sa23*Sa32 + Sa12*Sa24*Sa33)

      let DY = (Sa11*Sa24*Sa33 + Sa14*Sa23*Sa31 + Sa13*Sa21*Sa34) - (Sa13*Sa24*Sa31 + Sa11*Sa23*Sa34 + Sa14*Sa21*Sa33)

      let DZ = (Sa11*Sa22*Sa34 + Sa12*Sa24*Sa31 + Sa14*Sa21*Sa32) - (Sa14*Sa22*Sa31 + Sa11*Sa24*Sa32 + Sa12*Sa21*Sa34)

      let x = DX / D
      let y = DY / D
      let z = DZ / D

      res2.innerHTML = `x = ${x} <br> y = ${y} <br> z = ${z}`
      
    } else {
      res2.innerHTML = "Sistema impossível ou sistema possível indeterminado"
    }
  }
}
