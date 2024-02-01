import {
	Box,
	Button,
	Flex,
	Grid,
	HStack,
	Heading,
	Image,
	SimpleGrid,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { TbArrowLeft } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import AlertCom from "../components/AlertCom";
import CardIcons from "../components/CardIcons";
import CriticScore from "../components/CriticScore";
import Emoji from "../components/Emoji";
import ExpandableText from "../components/ExpandableText";
import GameCard from "../components/GameCard";
import useGameDetails from "../hooks/useGameDetails";
import useGameTrailers from "../hooks/useGameTrailers";
import useScreenshots from "../hooks/useScreenshots";
import useSuggested from "../hooks/useSuggested";
import getMonthName from "../services/getMonthName";
import getCroppedUrl from "../services/image-url";
import useGameQueryStore from "../store";
// when moving from a game back to best of the year page, best of the year page do not load, the results array ie empty
const GameDetailsPage = () => {
	const setDefault = useGameQueryStore((state) => state.setDefault);
	const { slug } = useParams();

	if (!slug) return null;
	const { data, isLoading, error } = useGameDetails(slug);
	const { data: suggestedData } = useSuggested(slug);
	const { data: trailers } = useGameTrailers(slug);
	const { data: screenshots } = useScreenshots(slug);
	const modifiedTrailers = trailers?.results?.slice(0, 4);
	const [year, month] = data?.released ? data?.released.split('-') : ['', ''];

	const platforms = data?.parent_platforms
		.map((el) => el.platform)
		.filter((el) => el.slug !== '3do' && el.slug !== 'neo-geo');

	const description = data?.description_raw;
	let descriptionWithoutSpanish: string = '';

	if (description) {
		descriptionWithoutSpanish = description.slice(
			0,
			description.indexOf('Español')
		);
	}
	const platformObj = data?.parent_platforms
		?.map((p) => p.platform)
		.filter((el) => el.slug !== '3do' && el.slug !== 'neo-geo');

	let ratingText = '';
	if (data?.rating_top === 3) {
		ratingText = 'Meh';
	} else if (data?.rating_top === 4) {
		ratingText = 'Recommended';
	} else if (data?.rating_top === 5) {
		ratingText = 'Exceptional';
	}

	if (error instanceof Error) return <AlertCom msg={error.message} />;

	return (
		<>
			{isLoading && (
				<Spinner
					size={'xl'}
					margin={'auto'}
					display={'flex'}
					marginTop={'2.5rem'}
				/>
			)}
			{data && (
				<>
					<Box
						mt={5}
						paddingInline={{ base: 6, md: 16, xl: 12 }}
						pb={16}
					>
						<span
							style={{
								marginBottom: '2rem',
								cursor: 'pointer',
								fontSize: '2rem',
								color: 'hsla(0,0%,100%,.4)',
								display: 'block',
								width: 'fit-content',
								margin: '0',
								padding: '.2rem',
								borderRadius: '50%',
								transition: 'all .4s ease',
							}}
							className='span-arrow'
							onClick={() => history.back()}
						>
							<TbArrowLeft />
						</span>
						<Text
							marginTop={'1rem'}
							fontSize={'xs'}
							mb={'32px'}
							color={'hsla(0,0%,100%,.4)'}
							textAlign={{
								base: 'center',
								lg: 'left',
							}}
						>
							<Button
								fontSize={'xs'}
								variant={'link'}
								color={'hsla(0,0%,100%,.4)'}
								fontWeight={'normal'}
								letterSpacing={'1.7px'}
								_hover={{
									textDecoration: 'none',
									border: 'none',
									color: '#fff',
								}}
							>
								<Link
									to={'/'}
									onClick={() => setDefault()}
								>
									HOME
								</Link>
							</Button>{' '}
							/{' '}
							<Button
								fontSize={'xs'}
								variant={'link'}
								color={'hsla(0,0%,100%,.4)'}
								fontWeight={'normal'}
								letterSpacing={'1.7px'}
								_hover={{
									textDecoration: 'none',
									border: 'none',
									color: '#fff',
								}}
							>
								<Link
									to={'/games'}
									onClick={() => setDefault()}
								>
									{' '}
									GAMES{' '}
								</Link>
							</Button>{' '}
							/ {data?.name.toUpperCase()}
						</Text>

						<Grid
							gridTemplateColumns={{
								base: '1fr',
								lg: '1fr 0.6fr',
							}}
							gap={8}
						>
							<Box>
								<Box>
									<Flex
										align={'center'}
										gap={4}
										flexDirection={{
											base: 'column',
											md: 'row',
										}}
										justifyContent={{
											base: 'center',
											lg: 'flex-start',
										}}
									>
										{data?.released && (
											<Box
												fontWeight={'400'}
												color={'#000'}
												backgroundColor={'#fff'}
												borderRadius={'4px'}
												fontSize={'xs'}
												padding={'2px 7.5px'}
												marginRight={'10px'}
											>
												{getMonthName(
													month
												)?.toUpperCase()}{' '}
												{month}, {year}
											</Box>
										)}
										<HStack gap={'.6rem'}>
											{platforms && (
												<CardIcons
													platform={platforms}
												/>
											)}
										</HStack>
										{data?.playtime !== 0 && (
											<Text
												fontSize={'12px'}
												letterSpacing={'2px'}
												textTransform={'uppercase'}
											>
												Average Playtime:{' '}
												{data?.playtime} Hours
											</Text>
										)}
									</Flex>
									<Heading
										mt={4}
										size={{
											base: '3xl',
											lg: '4xl',
										}}
										textAlign={{
											base: 'center',
											lg: 'left',
										}}
										fontFamily={'orbitron'}
									>
										{data?.name}
									</Heading>
								</Box>

								<HStack
									mt={5}
									justifyContent={{
										base: 'center',
										lg: 'flex-start',
									}}
								>
									<Box>
										<Box
											display={'flex'}
											alignContent={'center'}
											alignItems={'center'}
											paddingBottom={'9px'}
											columnGap={'5px'}
										>
											<Text
												fontWeight={'700'}
												fontSize={'24px'}
												letterSpacing={'0.7px'}
												marginTop={'0.25rem'}
												lineHeight={'24px'}
											>
												{ratingText}
											</Text>
											<Emoji rating={data?.rating_top} />
										</Box>
										<Text
											letterSpacing={'3px'}
											textTransform={'uppercase'}
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.4)'}
										>
											{data?.ratings_count} Ratings
										</Text>
									</Box>
								</HStack>

								<Box mt={8}>
									<Heading
										fontSize={'2xl'}
										mb={3}
									>
										About
									</Heading>

									<ExpandableText
										description={descriptionWithoutSpanish}
									/>
										
								</Box>

								<SimpleGrid
									columns={{ base: 1, md: 2 }}
									rowGap={5}
									columnGap={10}
									mt={8}
								>
									<Box width={'100%'}>
										<Heading
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.2)'}
											marginBottom={2}
										>
											Platforms
										</Heading>

										{platformObj?.map((el, index) => (
											<>
												<Link
													key={el.id}
													to={`/games/${el.slug}`}
													className='suggested__games-link'
												>
													{el.name}
												</Link>
												{platformObj?.length !==
													index + 1 && ', '}
											</>
										))}
									</Box>

									{data?.metacritic && (
										<Box>
											<Heading
												fontSize={'sm'}
												color={'hsla(0,0%,100%,.2)'}
												marginBottom={2}
											>
												MetaScore
											</Heading>

											<CriticScore
												score={data?.metacritic}
											/>
										</Box>
									)}

									<Box width={'100%'}>
										<Heading
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.2)'}
											marginBottom={2}
										>
											Genres
										</Heading>

										{data?.genres?.map((el, index) => (
											<>
												<Link
													key={el.id}
													to={`/games/${el.slug}`}
													className='suggested__games-link'
												>
													{el.name}
												</Link>
												{data?.genres?.length !==
													index + 1 && ', '}
											</>
										))}
									</Box>

									{data?.released && (
										<Box>
											<Heading
												fontSize={'sm'}
												color={'hsla(0,0%,100%,.2)'}
												marginBottom={2}
											>
												Release Date
											</Heading>

											<Text>
												{getMonthName(month)} {month},{' '}
												{year}
											</Text>
										</Box>
									)}

									<Box width={'100%'}>
										<Heading
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.2)'}
											marginBottom={2}
										>
											Developers
										</Heading>

										{data?.developers.map((el, index) => (
											<>
												<Text
													key={el.id}
													display={'inline'}
												>
													{el.name}
												</Text>
												{data?.developers.length !==
													index + 1 && ', '}
											</>
										))}
									</Box>

									<Box width={'100%'}>
										<Heading
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.2)'}
											marginBottom={2}
										>
											Publishers
										</Heading>

										{data?.publishers.map((el, index) => (
											<>
												<Text
													key={el.id}
													display={'inline'}
												>
													{el.name}

													{data?.publishers.length !==
														index + 1 && ', '}
												</Text>
											</>
										))}
									</Box>

									<Box>
										<Heading
											fontSize={'sm'}
											color={'hsla(0,0%,100%,.2)'}
											marginBottom={2}
										>
											Content Rating
										</Heading>

										<Text>
											{/* {data?.esrb_rating
												? data?.esrb_rating?.name
												: 'Not Rated'} */}
											{data?.esrb_rating?.name ??
												'Not Rated'}
										</Text>
									</Box>
								</SimpleGrid>

								<Box>
									{data?.website && (
										<Box>
											<Heading
												fontSize={'sm'}
												color={'hsla(0,0%,100%,.2)'}
												marginBottom={2}
												marginTop={'16px'}
											>
												Website
											</Heading>

											<Link
												to={data?.website}
												className='suggested__games-link'
											>
												{data?.website}
											</Link>
										</Box>
									)}
								</Box>
							</Box>
							<Box>
								{modifiedTrailers?.length !== 0 && (
									<Box mb={4}>
										<video
											controls
											autoPlay
											disablePictureInPicture
											controlsList='nodownload  noplaybackrate'
											poster={
												modifiedTrailers?.at(0)?.preview
											}
											className='video_player start_video'
											playsInline
											loop
										>
											<source
												src={
													modifiedTrailers?.at(0)
														?.data[480]
												}
												type='video/mp4'
											/>
											Sorry, your browser doesn&apos;t
											support embedded videos, but
											don&apos;t worry, you can
											<a href='https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4'>
												download the MP4
											</a>
											and watch it with your favorite
											video player!
										</video>
									</Box>
								)}

								<SimpleGrid
									columns={{ base: 1, md: 2 }}
									spacing={4}
								>
									{screenshots?.results?.map((el) => (
										<Image
											src={getCroppedUrl(el.image)}
											key={el.id}
											alt={data.name}
											borderRadius={'3px'}
											transition={'transform .2s ease'}
											_hover={{
												transform: 'scale(1.1)',
											}}
										/>
									))}
								</SimpleGrid>
							</Box>
						</Grid>

						{suggestedData?.results.length !== 0 && (
							<Box>
								<Heading
									fontSize={'3xl'}
									color={'#fff'}
									marginBottom={5}
									marginTop={14}
									fontWeight={400}
								>
									Games like {data?.name}
								</Heading>

								<SimpleGrid
									columns={{ sm: 1, md: 2, xl: 3 }}
									spacing={'25px'}
								>
									{suggestedData?.results?.map((el) => (
										<GameCard
											game={el}
											key={el.id}
										/>
									))}
								</SimpleGrid>
							</Box>
						)}

						{modifiedTrailers?.length !== 0 && (
							<Box mt={12}>
								<Heading
									fontSize={'2xl'}
									mb={5}
									fontWeight={600}
								>
									{data?.name} Videos
								</Heading>

								<Grid
									gridTemplateColumns={{
										base: '1fr',
										lg: '1fr 1fr',
									}}
									gap={6}
									className='video__box'
								>
									{modifiedTrailers?.map((el) => (
										<Box key={el.id}>
											<video
												controls
												disablePictureInPicture
												controlsList='nodownload  noplaybackrate'
												poster={el.preview}
												className='video_player'
											>
												<source
													src={el.data[480]}
													type='video/mp4'
												/>
												<source
													src={el.data.max}
													type='video/mp4'
												/>
												Sorry, your browser doesn&apos;t
												support embedded videos, but
												don&apos;t worry, you can
												<a href='https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4'>
													download the MP4
												</a>
												and watch it with your favorite
												video player!
											</video>
										</Box>
									))}
								</Grid>
							</Box>
						)}
					</Box>

					<Box
						position={'absolute'}
						top={0}
						left={0}
						width={'100%'}
						height={'100%'}
						zIndex={'-2'}
					>
						<Box
							height={'500px'}
							className='art-wrapper'
						>
							<Box
								height={'500px'}
								backgroundColor={'transparent'}
								backgroundImage={`linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${data?.background_image})`}
								maxHeight={'100%'}
								backgroundSize={'cover'}
								backgroundRepeat={'no-repeat'}
								backgroundPosition={'top'}
								transition={'background .3s'}
							></Box>
						</Box>
					</Box>
				</>
			)}
		</>
	);
};

export default GameDetailsPage;
