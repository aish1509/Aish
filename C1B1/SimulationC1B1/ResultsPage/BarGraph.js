import React from 'react';
import {Chart, Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {mockScoreDataC1B1} from '../constants';

Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';
Chart.defaults.scale.ticks.display = false;
const data = {
	labels: [
		'PEOPLE THAT SHARED LINK',
		'PEOPLE THAT SAW VIDEO',
		'PEOPLE THAT DONATED'
	],
	datasets: [
		{
			label: 'RESULTS',
			backgroundColor: [
				'rgba(219,68,97,0.9)',
				'rgba(73,183,219,0.9)',
				'rgba(255,253,55,0.9)'
			],
			borderColor: [
				'rgba(219,68,97,0.8)',
				'rgba(183,58,83)',
				'rgba(234,218,47)'
			],
			borderWidth: 1,
			hoverBackgroundColor: [
				'rgba(219,68,97,0.7)',
				'rgba(73,183,219,0.7)',
				'rgba(255,253,55,0.7)'
			],
			hoverBorderColor: 'rgba(255,255,255,1)',
			data: []
		}
	]
};

const BarGraph = ({nosOfDays}) => {
	const fakerData = [
		mockScoreDataC1B1.sharedLink[nosOfDays],
		mockScoreDataC1B1.sawVideo[nosOfDays],
		mockScoreDataC1B1.donated[nosOfDays]
	];
	data.datasets[0].data = [...fakerData];

	return (
		<div
			style={{
				height: '50%',
				width: '50%',
				marginTop: '-10%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<h2>RESULTS: DAY {nosOfDays}</h2>
			<Bar
				data={data}
				width={40}
				height={60}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									max: 65000,
									min: 100,
									stepSize: 1000
								},
								gridLines: {
									display: false,
									drawBorder: false
								}
							}
						],
						xAxes: [
							{
								barThickness: 60,
								ticks: {
									display: true
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};

export default BarGraph;
