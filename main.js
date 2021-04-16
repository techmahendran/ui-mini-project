document.getElementById('output').style.visibility = 'hidden';

document.getElementById('box1').addEventListener('input', (e) =>{

document.getElementById('output').style.visibility = 'visible';

let pound = e.target.value;

document.getElementById('gramsOutput').innerHTML = pound/0.0022046;

document.getElementById('kgOutput').innerHTML = pound/2.2046;

document.getElementById('ozOutput').innerHTML = pound*16;
})