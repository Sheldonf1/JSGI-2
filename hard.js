var tbmi, m, h, jbmi, m2, h2;

m = 8;
h = 9;

m2 = 45;
h2 = 10;


tbmi = m / (h ** 2);
jbmi = m2 / (h2 ** 2);

console.log(`Is Tom’s BMI higher than Jerry’s? ${tbmi > jbmi}`);

