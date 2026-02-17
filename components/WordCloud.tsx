'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import wordsData from '@/data/word_cloud.json';

export default function WordCloud() {
    const svgRef = useRef<SVGSVGElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            if (svgRef.current && svgRef.current.parentElement) {
                setDimensions({
                    width: svgRef.current.parentElement.offsetWidth,
                    height: svgRef.current.parentElement.offsetHeight,
                });
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        const layout = cloud()
            .size([dimensions.width, dimensions.height])
            .words(wordsData.map((d) => ({ text: d.text, size: d.value })))
            .padding(5)
            .rotate(() => (~~(Math.random() * 2) * 90))
            .font('Inter')
            .fontSize((d) => Math.sqrt(d.size || 0) * 8) // Increased scaling for larger fonts
            .on('end', draw);

        layout.start();

        function draw(words: cloud.Word[]) {
            const svg = d3.select(svgRef.current);
            svg.selectAll('*').remove(); // Clear previous

            svg
                .attr('width', layout.size()[0])
                .attr('height', layout.size()[1])
                .append('g')
                .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
                .selectAll('text')
                .data(words)
                .enter()
                .append('text')
                .style('font-size', (d) => d.size + 'px')
                .style('font-family', 'Inter, sans-serif')
                .style('fill', (d, i) => d3.schemeCategory10[i % 10])
                .attr('text-anchor', 'middle')
                .attr('transform', (d) => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
                .text((d) => d.text);
        }
    }, [dimensions]);

    return (
        <div className="h-[600px] w-full max-w-[600px] mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 relative overflow-hidden aspect-square">
            <svg ref={svgRef} className="w-full h-full" />
        </div>
    );
}
