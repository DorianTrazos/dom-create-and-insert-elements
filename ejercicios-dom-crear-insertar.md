# Modo Fácil

1️⃣Crea un input donde el usuario pueda escribir su nombre y un botón con el texto "Say hello".
Al pulsar el botón, se debe crear e insertar un elemento h2 con el texto "Hello, [nombre]" dentro del div con id "contenedor".

💡 Detalles técnicos que deben aplicar:
El h2 debe generarse dinámicamente con createElement.
Debe usarse getElementById para seleccionar elementos.
El texto debe construirse a partir del valor del input.

2️⃣Imagina que tienes un control deslizante que te permite elegir el nivel de poder de un encabezado del 1 al 6.
Cuanto más alto el número… más pequeño el encabezado (¡como si se estuviera alejando!).
Cuando hagas clic en el botón, se generará un encabezado con la etiqueta correspondiente (h1...h6) y el texto "I am an hX", donde X es el número elegido.

Ejemplo: si eliges 2, se insertará un <h2> con el texto "I am an h2".

# Modo Pro

3️⃣ 🎮 Abby y su búsqueda de suministros
Descripción del ejercicio:
Abby está en su travesía postapocalíptica y cada día sale en busca de suministros. Tienes que:

Crear un botón con el texto "Find supplies".

Debajo, un <ul> vacío con id "supply-history".

Cada vez que se haga clic en el botón:

Se incrementa un contador de días.

Se elige aleatoriamente si encuentra algo o no encuentra nada. (Tendrá una probabilidad del 50% de encontrar algo útil)

Se inserta un li en el historial con un mensaje narrativo personalizado según el resultado.

const supplies = [
'a medkit',
'a flashlight with half battery',
'some canned food',
'a rusty knife',
'a bottle of clean water',
'a pack of bullets',
'a piece of cloth (could be used as a bandage)',
'a lighter',
'an empty bottle (might be useful)',
'some herbs (smell weird)',
'a broken walkie-talkie',
'a protein bar, still edible',
'a map with strange markings'
];

const failureTexts = [
'Nothing but silence and dust. Abby returned empty-handed.',
'No supplies today. The world remains unforgiving.',
"She searched everywhere, but luck wasn't on her side."
];

4️⃣ 🏃‍♀️💥 Bego Runner: Modo “Esquivar Coches” ON
Descripción del ejercicio:
Un botón con el texto "Watch out, Bego!".

Un div con id "traffic-zone" que mostrará una secuencia de emojis de coches (🚗, 🚕, 🚙) cada vez que se pulsa el botón:

Se añade un coche aleatorio al div.

Se guarda un histórico de los últimos 3 coches.

Si los 3 últimos coches son iguales, se muestra un <p> en el DOM con el texto:

"Bego, please be careful! That car model is stalking you! 🚨"

const cars = ['🚗', '🚕', '🚙'];
