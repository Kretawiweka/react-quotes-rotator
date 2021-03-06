import styled from 'styled-components';

export const QuotesWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lora:400i');
    .qtrotator {
        font-family: 'Lora', serif;
        position: relative;
        margin: 3em auto 5em auto;
        max-width: 800px;
        width: 100%;
        min-height: 400px;
    }

    .qtrotator .qtcontent {
        position: absolute;
        min-height: 200px;
        border-top: 1px solid #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
        padding: 2em 0;
        top: 0;
        z-index: 0;
        width: 100%;
    }

    .no-js .qtrotator .qtcontent {
        border-bottom: none;
    }

    /* Currently visible */
    .qtrotator .qtcontent.qtcurrent,
    .no-js .qtrotator .qtcontent {
        position: relative; 
        z-index: 100;
        pointer-events: auto;
        opacity: 1;
    }

    .qtrotator .qtcontent:before,
    .qtrotator .qtcontent:after {
        content: " ";
        display: table;
    }

    .qtrotator .qtcontent:after {
        clear: both;
    }

    .qtprogress {
        position: absolute;
        height: 3px;
        width: 0%;
        top: 0;
        z-index: 1000;
    }

    .qtrotator blockquote {
        font-size: 1em;
        border: none;
        margin: 0;
        padding: 0;
    }

    .qtrotator blockquote {
        font-size: 1.3em;
        font-weight: 300;
        margin: 0.4em 0 1em;
        span {
            font-style: italic;
            margin: 10px 0px;
        }
    }

    .qtrotator blockquote footer {
        font-size: 1em;
        margin-top: 1.3em;
    }

    .qtrotator blockquote footer:before {
        content: '- ';
    }
    .qtrotator .qtcontent img {
        float: right;
        margin-left: 3em;
        max-width: 20%;
    }

    .hidden {
        display: none;
    }

    /* Example for media query */
    @media screen and (max-width: 30.6em) { 

        .qtrotator {
            font-size: 70%;
        }

        .qtrotator img {
            width: 80px;
        }

    }
`