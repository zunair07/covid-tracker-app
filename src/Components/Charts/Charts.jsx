import React from 'react';
// import { getdailyData } from '../../api';
import { Bar, Pie } from 'react-chartjs-2';
import styles from './Charts.module.css';


const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {


    // let [dailyData, setdailyData] = useState([]);

    // useEffect(() => {

    //     const fetechAPI = async () => {

    //         setdailyData(await getdailyData());
    //     }

    //     console.log(dailyData);
    //     fetechAPI();
    // }, []);

    // const lineChart = (
    //     dailyData.length
    //         ? (
    //             <Line
    //                 data={{
    //                     labels: dailyData.map(({ date }) => date),
    //                     datasets: [{
    //                         data: dailyData.map(({ confirmed }) => confirmed),
    //                         label: 'Infected',
    //                         borderColor: '#3333ff',
    //                         fill: true,
    //                     }, {
    //                         data: dailyData.map(({ deaths }) => deaths),
    //                         label: 'Deaths',
    //                         borderColor: 'rgba(255,0,0,1)',
    //                         backgroundColor: 'rgba(255,0,0,0.5)',
    //                         fill: true,
    //                     }],
    //                 }}
    //             />
    //         ) : null

    // );

    const PieChart = (
        confirmed ? (
            <Pie 
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    data:[confirmed.value,recovered.value, deaths.value],
                    backgroundColor: [
                        'rgb(0,0,255,0.7)',
                        'rgb(0,255,0,0.7)',
                        'rgb(255,0,0,0.8)',
                    ],
                    hoverBackgroundColor: [
                        'rgb(0,0,255,1)',
                        'rgb(0,255,0,1)',
                        'rgb(255,0,0,1)',
                        ],
                }]
            }}
            height='100'/>

        ) : null
        
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            labels: 'people',
                            data: [confirmed.value, recovered.value, deaths.value],
                            backgroundColor: [
                                'rgb(0,0,255,0.7)',
                                'rgb(0,255,0,0.7)',
                                'rgb(255,0,0,0.8)',
                            ],
                            hoverBackgroundColor: [
                                'rgb(0,0,255,1)',
                                'rgb(0,255,0,1)',
                                'rgb(255,0,0,1)',
                                ],
                            
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : PieChart}
        </div>
    )
}


export default Charts;