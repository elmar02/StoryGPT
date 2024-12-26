'use client'
import React, { useEffect } from 'react';
import Vara from 'vara';

interface Props {
    text: string;
}

const calculateFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
        return 30;
    } else if (screenWidth < 1024) {
        return 35;
    }
    return 40;
    return 40
};

const HandwritingText = ({ text }: Props) => {
    useEffect(() => {
        const container = document.getElementById('vara-container');
        function renderVara() {
            const vara = new Vara(
                "#vara-container",
                "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
                [
                    {
                        text: text,
                        fontSize: calculateFontSize(),
                        strokeWidth: 1.5,
                        textAlign: 'center',
                        delay: 300,
                        duration: 10000,
                        color: '#14b8a6',
                    },
                ]
            );
        }

        function handleResize() {
            if(container) container.innerHTML = ''
            renderVara()
        }
        if (window) {
            if (!container) return;
            renderVara()
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize)
                container.innerHTML = '';
            };
        }
    }, [text]);

    return <div id="vara-container"></div>;
};

export default HandwritingText;
