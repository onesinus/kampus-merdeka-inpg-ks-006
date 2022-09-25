/* CATATAN
 document = HTML yang kita buat
 .getElementById(), addEventListener() => contoh fungsi yang disediakan DOM
 .value, .innerText => contoh attribute
*/

/*
    Cara 1: panggil fungsi javascript dengan event di html
    <button onclick="onClickButton">Click</button>
    <script>
        function onClickButton() {
            const userInput = document.getElementById('userInput').value
            document.querySelector('title').innerText = userInput
        }
    </script>
*/

/*
    Cara 2: handle event full dari javascript, html hanya set selectornya saja
    <button id="btnChangeTitle">Click</button>

*/
document.getElementById('btnChangeTitle').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value
    document.querySelector('#titleDisplay').innerHTML = userInput
})