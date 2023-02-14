import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { pieData } from './pieData';

const Chart = () => {
    return (
        <div style={{ width: '100%', height: '250px', objectFit: 'contain' }}>
            <ResponsivePie
                data={pieData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                startAngle={-118}
                innerRadius={0.1}
                cornerRadius={7}
                activeOuterRadiusOffset={10}
                colors={{ scheme: 'purple_blue' }}
                borderColor={{ theme: 'background' }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={7}
                arcLinkLabelsTextOffset={11}
                arcLinkLabelsTextColor='#333333'
                arcLinkLabelsOffset={-5}
                arcLinkLabelsDiagonalLength={12}
                arcLinkLabelsStraightLength={18}
                arcLinkLabelsThickness={7}
                arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
                arcLabelsRadiusOffset={0.7}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', '1.6']],
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'c',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'go',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'python',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'scala',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'lisp',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'elixir',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'javascript',
                        },
                        id: 'lines',
                    },
                ]}
                motionConfig={{
                    mass: 1,
                    tension: 124,
                    friction: 26,
                    clamp: false,
                    precision: 0.01,
                    velocity: 0,
                }}
            />
        </div>
    );
};

export default Chart;
