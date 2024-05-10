import React, { useState } from 'react'
import ChevronDown from '../../assets/Footer/chevron-down.svg'
import facebookLogo from '../../assets/Footer/facebook-footer.svg'
import bioVitLogo from '../../assets/Footer/footer-logo.png'
import instagramLogo from '../../assets/Footer/instagram-footer.svg'
import masterCardLogo from '../../assets/Footer/mastercard-logo.svg'
import visaLogo from '../../assets/Footer/visa-logo.svg'

const Footer = () => {
	const [showMore, setShowMore] = useState(false)
	const [showMore2, setShowMore2] = useState(false)
	const [showMore3, setShowMore3] = useState(false)
	const [showMore4, setShowMore4] = useState(false)

	return (
		<div className='bg-[#EFBE84]'>
			<div className='container px-[1rem] pb-[27px]sm:px-[2rem] lg:px-[4rem]  xl:px-[5rem]  mx-auto pt-[16px] pb-[36px]'>
				<div className='flex lg:justify-start justify-center'>
					<img src={bioVitLogo} alt='footer-logo' />
				</div>
				<div className='mt-[24px]'>
					<div className='flex justify-between flex-wrap'>
						<div className='flex flex-col w-full sm:w-auto'>
							<div className=' border-t-[#857A54] border-t-[1px] py-[8px] sm:border-0'>
								<div className='flex justify-between'>
									<div className='flex flex-col'>
										<h5 className=' text-[#7E7E7E] pb-0 sm:pb-[16px]'>
											About company
										</h5>
										{showMore ? (
											<div className='pt-[17px] sm:hidden'>
												<ul className='flex flex-col gap-[12px]'>
													<li>About company</li>
													<li>Cooperation</li>
													<li>Contacts</li>
													<li>Blog</li>
												</ul>
											</div>
										) : null}
									</div>
									<button
										onClick={() => setShowMore(!showMore)}
										className='justify-end h-[20px] sm:hidden'
									>
										<img
											className='sm:hidden'
											src={ChevronDown}
											alt='ChevronDown'
										/>
									</button>
								</div>
								<div className='gap-[12px] flex flex-col'>
									<p className='hidden sm:block font-normal'>About company</p>
									<p className='hidden sm:block'>Cooperation</p>
									<p className='hidden sm:block'>Contacts</p>
									<p className='hidden sm:block'>Blog</p>
								</div>
							</div>
						</div>

						<div className='flex flex-col w-full sm:w-auto'>
							<div className=' border-t-[#857A54] border-t-[1px] py-[8px] sm:border-0'>
								<div className='flex justify-between'>
									<div className='flex flex-col'>
										<h5 className='text-[#7E7E7E] sm:pb-[16px]'>Information</h5>
										{showMore2 ? (
											<div className='pt-[17px] sm:hidden'>
												<ul className='flex flex-col gap-[12px]'>
													<li>Payment</li>
													<li>Delivery</li>
													<li>Question and answer</li>
													<li>Returns and Exchanges</li>
												</ul>
											</div>
										) : null}
									</div>
									<button
										onClick={() => setShowMore2(!showMore2)}
										className='justify-end h-[20px] sm:hidden '
									>
										<img
											className='sm:hidden'
											src={ChevronDown}
											alt='ChevronDown'
										/>
									</button>
								</div>
								<div className='gap-[12px] flex flex-col'>
									<p className='hidden sm:block'>Payment</p>
									<p className='hidden sm:block'>Delivery</p>
									<p className='hidden sm:block'>Question and answer</p>
									<p className='hidden sm:block'>Returns and Exchanges</p>
								</div>
							</div>
						</div>

						<div className='flex flex-col w-full sm:w-auto'>
							<div className=' border-t-[#857A54] border-t-[1px] py-[8px] sm:border-0'>
								<div className='flex justify-between'>
									<div className='flex flex-col'>
										<h5 className=' text-[#7E7E7E] sm:pb-[16px]'>Contacts</h5>
										{showMore3 ? (
											<div className='pt-[17px] sm:hidden'>
												<ul className='flex flex-col gap-[12px]'>
													<li>+380 93 000 00 00</li>
													<li>email@gmail.com</li>
												</ul>
											</div>
										) : null}
									</div>
									<button
										onClick={() => setShowMore3(!showMore3)}
										className='justify-end h-[20px] sm:hidden '
									>
										<img
											className='sm:hidden'
											src={ChevronDown}
											alt='ChevronDown'
										/>
									</button>
								</div>
								<div className='gap-[12px] flex flex-col'>
									<p className='hidden sm:block'>+380 93 000 00 00</p>
									<p className='hidden sm:block'>email@gmail.com</p>
								</div>
							</div>
						</div>

						<div className='flex flex-col w-full sm:w-auto'>
							<div className=' border-t-[#857A54] border-t-[1px] py-[8px] sm:border-0'>
								<div className='flex justify-between'>
									<div className='flex flex-col'>
										<h5 className=' text-[#7E7E7E] sm:pb-[14px]'>
											Social media
										</h5>
										{showMore4 ? (
											<div className='pt-[17px] sm:hidden'>
												<ul className='flex flex-col gap-[12px] md:hidden'>
													<div className='flex gap-[16px]'>
														<li>
															<img
																className='h-[20px]'
																src={instagramLogo}
																alt='instagramLogo'
															></img>
														</li>
														<li>
															<img
																className='h-[20px]'
																src={facebookLogo}
																alt='facebookLogo'
															></img>
														</li>
													</div>
												</ul>
											</div>
										) : null}
									</div>
									<button
										onClick={() => setShowMore4(!showMore4)}
										className='justify-end h-[20px] sm:hidden '
									>
										<img
											className='sm:hidden'
											src={ChevronDown}
											alt='ChevronDown'
										/>
									</button>
								</div>
								<div className='gap-[8px] flex'>
									<img
										className='hidden sm:block'
										src={instagramLogo}
										alt='instagramLogo'
									></img>
									<img
										className='hidden sm:block'
										src={facebookLogo}
										alt='facebookLogo'
									></img>
								</div>
							</div>
							<div className='sm:pt-[24px]'>
								<div className=' border-t-[#857A54] border-t-[1px] py-[8px] sm:border-0'>
									<div className='flex justify-between pb-[14px]'>
										<h5 className='  text-[#7E7E7E] '>Payment</h5>
									</div>
									<div className='flex'>
										<img src={masterCardLogo} alt='masterCardLogo'></img>
										<img src={visaLogo} alt='visaLogo'></img>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
>>>>>>> develop
