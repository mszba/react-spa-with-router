import React from 'react';
import Article from '../components/Article';



const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Teoria strun (TS) – model matematyczny przewidujący, że podstawowym budulcem materii nie są cząstki w postaci punktu, lecz struny wielkości 10-31 metra. Pierwotna teoria strun, zwana teorią strun bozonowych, powstała w 1970 roku. Jednak nie jest ona teorią odzwierciedlającą stan naszego fizycznego świata, ponieważ nie zakłada istnienia fermionów. Z upływem czasu pojawiały się nowe odmiany teorii strun. Obecnie uważa się, że wszystkie te teorie są odmianami jednej teorii wyższego rzędu, M-teorii.",
        source: "https://pl.wikipedia.org/wiki/Teoria_strun"
    },
    {
        id: 2,
        title: "Czym jest ciąg Fibonacciego?",
        author: "Josh Kowalski",
        text: "Ciąg Fibonacciego – ciąg liczb naturalnych określony rekurencyjnie w sposób następujący: Pierwszy wyraz jest równy 0, drugi jest równy 1, każdy następny jest sumą dwóch poprzednich.",
        source: "https://pl.wikipedia.org/wiki/Ci%C4%85g_Fibonacciego"
    },
    {
        id: 3,
        title: "Czym jest teoria względności?",
        author: "Johny Kwiatkowski",
        text: "Teoria względności (Alberta Einsteina) to nazwa dwóch teorii fizycznych: Szczególna teoria względności (STW) – teoria czasoprzestrzeni i ruchu, odnosząca się głównie do inercjalnych układów odniesienia, opublikowana w 1905 roku.",
        source: "https://pl.wikipedia.org/wiki/Teoria_wzgl%C4%99dno%C5%9Bci"
    },

]


const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">

            {artList}

        </div>
    );
}

export default HomePage;