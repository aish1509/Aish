export const MEDIA_URI = '/m180/media/';
export const REACT_APP_MEDIA_URI = process.env.REACT_APP_MEDIA_URI;
export const BASE_PATH = REACT_APP_MEDIA_URI || MEDIA_URI;

export const ReleaseAlbumImage = `${BASE_PATH}images/explorezone/block1/ez-b1-start-original.jpg`;
export const PopCover = 'images/explorezone/block1/ez-b1-genre-bg-pop.jpg';
export const CountryCover =
	'images/explorezone/block1/ez-b1-genre-bg-country.jpg';
export const ElectronicCover =
	'images/explorezone/block1/ez-b1-genre-bg-electronic.jpg';
export const HiphopCover =
	'images/explorezone/block1/ez-b1-genre-bg-hiphop.jpg';
export const IndieCover = 'images/explorezone/block1/ez-b1-genre-bg-indie.jpg';
export const RockCover = 'images/explorezone/block1/ez-b1-genre-bg-rock.jpg';
export const TShirtModal =
	'images/explorezone/block1/block01sim_rewardrollover01_t-shirt.png';
export const AlbumDownloadModal =
	'images/explorezone/block1/block01sim_rewardrollover02_album.png';
export const SignedModal =
	'images/explorezone/block1/block01sim_rewardrollover03_signed.png';
export const CoverModal =
	'images/explorezone/block1/block01sim_rewardrollover04_cover.png';
export const ConcertModal =
	'images/explorezone/block1/block01sim_rewardrollover05_concert.png';
export const CountryMusicImage = 'images/explorezone/block1/ez-b1-country.png';
export const ElectronicMusicImage =
	'images/explorezone/block1/ez-b1-electronic.png';
export const HipHopMusicImage = 'images/explorezone/block1/ez-b1-hiphop.png';
export const IndieMusicImage = 'images/explorezone/block1/ez-b1-indie.png';
export const PopMusicImage = 'images/explorezone/block1/ez-b1-pop.png';
export const RockMusicImage = 'images/explorezone/block1/ez-b1-rock.png';
export const TShirtImg = 'images/explorezone/block1/ez-b1-fundraiser-shirt.png';
export const AlbumDownloadImg =
	'images/explorezone/block1/ez-b1-fundraiser-download.png';
export const FundRaiserDscImg =
	'images/explorezone/block1/ez-b1-fundraiser-disc.png';
export const FundRaiserCoverImg =
	'images/explorezone/block1/ez-b1-fundraiser-cover.png';
export const FundRaiserConcertImg =
	'images/explorezone/block1/ez-b1-fundraiser-concert.png';
export const biz =
	'images/explorezone/block1/ez-b1-choose-fundraiser-bizkicker.png';
export const indie =
	'images/explorezone/block1/ez-b1-choose-fundraiser-indiefunder.png';
export const sound =
	'images/explorezone/block1/ez-b1-choose-fundraiser-soundmachine.png';
export const indieSite = 'images/explorezone/block1/sitechoice_01_indie.png';
export const bizSite = 'images/explorezone/block1/sitechoice_02_bizkicker.png';
export const soundSite =
	'images/explorezone/block1/sitechoice_03_soundmachine.png';
export const FollowerImage =
	'images/explorezone/block1/ez-b1-share-follower-bg.png';
export const RaiseFundsAudio =
	'audio/vo/en_US/exploreZone/block1/ez_b1_run1.mp3';
export const SetupRewardsAudio =
	'audio/vo/en_US/exploreZone/block1/ez_b1_run2.mp3';
export const ShareVideoAudio =
	'audio/vo/en_US/exploreZone/block1/ez_b1_run3.mp3';
export const ChooseTimeAudio =
	'audio/vo/en_US/exploreZone/block1/ez_b1_run4.mp3';
export const ChooseDayAudio =
	'audio/vo/en_US/exploreZone/block1/ez_b1_run5.mp3';

export const dropDownContent = [
	'Working on our first Album, can you help?',
	'Check out our video, Help us make an album!',
	'We worked hard on this one.Can you help us make more?',
	'One song down! Can you help us reach a whole album?'
];

export const shareVideoOptions = [
	'Link to Fundraiser',
	'Add Tag',
	'Add Mention',
	'Ask to Share'
];

export const coverImages = {
	rock: `${BASE_PATH}${RockCover}`,
	electronic: `${BASE_PATH}${ElectronicCover}`,
	pop: `${BASE_PATH}${PopCover}`,
	country: `${BASE_PATH}${CountryCover}`,
	hiphop: `${BASE_PATH}${HiphopCover}`,
	indie: `${BASE_PATH}${IndieCover}`
};

// Collection of music images
export const musicImgCollection = [
	`${BASE_PATH}${RockMusicImage}`,
	`${BASE_PATH}${ElectronicMusicImage}`,
	`${BASE_PATH}${PopMusicImage}`,
	`${BASE_PATH}${CountryMusicImage}`,
	`${BASE_PATH}${HipHopMusicImage}`,
	`${BASE_PATH}${IndieMusicImage}`
];

export const BroadCastTags = {
	0: 'Listen to my Album',
	1: '#',
	2: '@guitarist',
	3: 'Share this!'
};

export const smallImages = {
	rock: `${BASE_PATH}${RockMusicImage}`,
	electronic: `${BASE_PATH}${ElectronicMusicImage}`,
	pop: `${BASE_PATH}${PopMusicImage}`,
	country: `${BASE_PATH}${CountryMusicImage}`,
	hiphop: `${BASE_PATH}${HipHopMusicImage}`,
	indie: `${BASE_PATH}${IndieMusicImage}`
};

// Collection of music images
export const rewardsImgCollection = [
	`${BASE_PATH}${TShirtImg}`,
	`${BASE_PATH}${AlbumDownloadImg}`,
	`${BASE_PATH}${FundRaiserDscImg}`,
	`${BASE_PATH}${FundRaiserCoverImg}`,
	`${BASE_PATH}${FundRaiserConcertImg}`
];

export const rewardsImgModelCollection = [
	`${BASE_PATH}${TShirtModal}`,
	`${BASE_PATH}${AlbumDownloadModal}`,
	`${BASE_PATH}${SignedModal}`,
	`${BASE_PATH}${CoverModal}`,
	`${BASE_PATH}${ConcertModal}`
];

export const calenderDays = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

export const fundRaiser = [
	`${BASE_PATH}${indie}`,
	`${BASE_PATH}${biz}`,
	`${BASE_PATH}${sound}`
];

export const fundSite = [
	`${BASE_PATH}${indieSite}`,
	`${BASE_PATH}${bizSite}`,
	`${BASE_PATH}${soundSite}`
];

export const mockScoreDataC1B1 = {
	sawVideo: [
		100,
		124,
		153,
		190,
		235,
		291,
		361,
		447,
		554,
		686,
		849,
		1051,
		1302,
		1613,
		1997,
		2474,
		3064,
		3794,
		4699,
		5820,
		7208,
		8927,
		11056,
		13693,
		16958,
		21002,
		26011,
		32214,
		39897,
		49412,
		61196
	],
	sharedLink: [
		33,
		41,
		51,
		63,
		78,
		97,
		120,
		149,
		185,
		22,
		283,
		350,
		434,
		538,
		666,
		825,
		1021,
		1265,
		1566,
		1940,
		2403,
		2976,
		3685,
		4564,
		5653,
		7001,
		8670,
		10738,
		13299,
		16471,
		20399
	],
	donated: [
		63,
		77,
		96,
		119,
		147,
		182,
		226,
		279,
		346,
		428,
		531,
		657,
		814,
		1008,
		1248,
		1546,
		1915,
		2371,
		2937,
		3638,
		4505,
		5579,
		6910,
		8558,
		10599,
		13127,
		16257,
		20134,
		24936,
		30882,
		38248
	],
	amountRaised: [
		'$20',
		'$25',
		'$31',
		'$38',
		'$47',
		'$58',
		'$72',
		'$89',
		'$111',
		'$137',
		'$170',
		'$210',
		'$260',
		'$323',
		'$399',
		'$495',
		'$613',
		'$759',
		'$940',
		'$1164',
		'$1442',
		'$1785',
		'$2211',
		'$2739',
		'$3392',
		'$4200',
		'$5202',
		'$6443',
		'$7979',
		'$9882',
		'$12239'
	]
};
