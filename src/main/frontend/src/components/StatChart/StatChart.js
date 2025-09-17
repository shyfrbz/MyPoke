import {ResponsiveBar} from '@nivo/bar'

function StatChart({data}) {
    const theme = {
        axis: {
            ticks: {
                text: {
                    fontSize: 12,
                    fontFamily: 'Galmuri11',
                    fontWeight: 500,
                }
            }
        }
    };
    return (
        <div style={{width: 400, minWidth: 400, height: 300, minHeight: 300}}>
            <ResponsiveBar
                data={data}
                theme={theme}
                indexBy="stat"
                layout="horizontal"
                groupMode="grouped"
                padding={0.8}
                valueScale={{type: 'linear', min: 0, max: 255}}
                tooltip={() => null}
                enableGridY={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                borderRadius={3}
                borderWidth={1}
                // borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                colors={d => d.value >= 70 ? 'lightgreen' : 'lightcoral'}
                axisLeft={{
                    tickSize: 0,       // 왼쪽 선 제거
                    tickPadding: 10,
                    tickRotation: 0,
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    tickValues: [0, 50, 100, 150, 200, 255]
                }}
                margin={{top: 20, right: 20, bottom: 30, left: 20}}
                layers={[
                    'grid',
                    'axes',
                    'bars',
                    'markers',
                    'legends',
                    ({bars, xScale}) =>
                        bars.map(bar => (
                            <text
                                key={bar.key}
                                x={bar.x + bar.width + 7} // 바 끝 오른쪽으로 살짝 띄움
                                y={bar.y + bar.height / 2} // 세로 중앙
                                textAnchor="start"
                                dominantBaseline="middle"
                                style={{
                                    fontSize: 11,
                                }}
                            >
                                {bar.data.value}
                            </text>
                        )),
                ]}
            />
        </div>


    )
}

export default StatChart;

