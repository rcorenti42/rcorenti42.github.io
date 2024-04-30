// Récupération du contexte du canevas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Définition des propriétés du cercle
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 50;
var color = "red";

// Dessin du cercle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
//ctx.fillStyle = color;
//ctx.fill();
ctx.closePath();