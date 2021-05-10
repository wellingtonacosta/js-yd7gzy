// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>
        Exemplo dos valores inline, block e inline-block
        da propriedade display;
    </title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/displayInlineBlock.css">
</head>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}
body {
    font-family: "Open Sans", sans-serif;
}
    ul, ol, li {
        list-style: none;
    }

    .example {
    color: #FFF;
    text-align: justify;
}
    .example-item {
        width: 25%;
        height: 150px;
        display: inline-block;
        
        
    }
    .example-item_first {
        background-color: #FAA116;
    }
    .example-item_second {
        background-color: #57C7C3;
    }
    .example-item_third {
        background-color: #3B97D3;
    }

    p{
      text-align: justify;
    }
    </style>

<body>
    <ul class="example">
        <li class="example-item example-item_first">Primeiro</li>
        <li class="example-item example-item_second">Segundo</li>
        <li class="example-item example-item_third">Terceiro</li>
    </ul>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Dolorem in laboriosam facilis a ad quisquam laudantium odit dignissimos, totam perferendis illum, nobis doloribus dolore reiciendis optio expedita, obcaecati repellat sint?
    </p>
</body>
</html>`

;