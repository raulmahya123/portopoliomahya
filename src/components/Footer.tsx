import Link from "next/link";

import * as Images from "@/components/Images";

const SocialLink = ({ children, ...props }: any) => {
    return (
        <Link href={props.href || "#0"}>
            <a
                id={props.id || ""}
                aria-label={props.id}
                className={`h-16 w-auto rounded-full bg-white mix-blend-hard-light p-4 transform hover:scale-110 cursor-pointer duration-200 flex items-center justify-center ${props.className}`}>
                {children}
            </a>
        </Link>
    );
};

export default function Footer() {
    return (
        <footer id="footer" className="relative pt-40 md:pt-56 overflow-hidden">
            {/* Content */}
            <section id="content" className=" w-full z-50">
                <div className="relative container w-full h-full flex flex-col justify-end items-center z-50 mx-auto space-y-8 py-10">
                    {/* Work Inquiry */}
                    <article
                        className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-center px-10 py-9 mx-auto text-white rounded-3.5 space-y-10 lg:space-y-0 lg:space-x-14 "
                        style={{ background: "linear-gradient(91.13deg, #57A773 0%, #157145 100%)" }}
                        data-aos="flipInX">
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="font-baloo text-4xl">I’m available for every opportunity!</h1>
                            <p className="font-comfortaa text-sm leading-6">Interested in working with me? Need help on your project? Or just wanna say hi? I’d love to hear you about that.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <p className="font-somatic text-lg text-center tracking-wider">Contact me at:</p>

                            <Link href="mailto:raulmahya11@gmail.com" passHref={true}>
                                <button className="btn bg-theme-green-dark text-white mt-4">
                                    <span className="bg-theme-green-light !text-xs sm:!text-lg">raulmahya11@gmail.com</span>
                                </button>
                            </Link>
                        </div>
                    </article>

                    {/* Social Links */}
                    <article className="relative flex flex-row flex-wrap justify-center items-center space-x-4" data-aos="tada">
                        <SocialLink id="instagram" href="https://www.instagram.com/raflymln_">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.41591 0.59C11.0155 0.516364 11.5255 0.5 15.6 0.5C19.6745 0.5 20.1845 0.517727 21.7827 0.59C23.3809 0.662273 24.4718 0.917273 25.4264 1.28682C26.4259 1.66455 27.3327 2.255 28.0827 3.01864C28.8464 3.76727 29.4355 4.67273 29.8118 5.67364C30.1827 6.62818 30.4364 7.71909 30.51 9.31455C30.5836 10.9168 30.6 11.4268 30.6 15.5C30.6 19.5745 30.5823 20.0845 30.51 21.6841C30.4377 23.2795 30.1827 24.3705 29.8118 25.325C29.4354 26.326 28.8454 27.233 28.0827 27.9827C27.3327 28.7464 26.4259 29.3355 25.4264 29.7118C24.4718 30.0827 23.3809 30.3364 21.7855 30.41C20.1845 30.4836 19.6745 30.5 15.6 30.5C11.5255 30.5 11.0155 30.4823 9.41591 30.41C7.82045 30.3377 6.72954 30.0827 5.775 29.7118C4.77398 29.3354 3.86703 28.7453 3.11727 27.9827C2.35415 27.2336 1.76361 26.3271 1.38682 25.3264C1.01727 24.3718 0.763635 23.2809 0.689998 21.6855C0.616362 20.0832 0.599998 19.5732 0.599998 15.5C0.599998 11.4255 0.617726 10.9155 0.689998 9.31727C0.762271 7.71909 1.01727 6.62818 1.38682 5.67364C1.76417 4.67284 2.35516 3.76634 3.11863 3.01727C3.86733 2.25432 4.77337 1.66379 5.77363 1.28682C6.72818 0.917273 7.81909 0.663636 9.41454 0.59H9.41591ZM21.6614 3.29C20.0795 3.21773 19.605 3.20273 15.6 3.20273C11.595 3.20273 11.1205 3.21773 9.53863 3.29C8.07545 3.35682 7.28182 3.60091 6.75273 3.80682C6.05318 4.07955 5.55273 4.40273 5.02773 4.92773C4.53006 5.41189 4.14706 6.00129 3.90682 6.65273C3.70091 7.18182 3.45682 7.97545 3.39 9.43864C3.31773 11.0205 3.30273 11.495 3.30273 15.5C3.30273 19.505 3.31773 19.9795 3.39 21.5614C3.45682 23.0245 3.70091 23.8182 3.90682 24.3473C4.14682 24.9977 4.53 25.5882 5.02773 26.0723C5.51182 26.57 6.10227 26.9532 6.75273 27.1932C7.28182 27.3991 8.07545 27.6432 9.53863 27.71C11.1205 27.7823 11.5936 27.7973 15.6 27.7973C19.6064 27.7973 20.0795 27.7823 21.6614 27.71C23.1245 27.6432 23.9182 27.3991 24.4473 27.1932C25.1468 26.9205 25.6473 26.5973 26.1723 26.0723C26.67 25.5882 27.0532 24.9977 27.2932 24.3473C27.4991 23.8182 27.7432 23.0245 27.81 21.5614C27.8823 19.9795 27.8973 19.505 27.8973 15.5C27.8973 11.495 27.8823 11.0205 27.81 9.43864C27.7432 7.97545 27.4991 7.18182 27.2932 6.65273C27.0205 5.95318 26.6973 5.45273 26.1723 4.92773C25.6881 4.4301 25.0987 4.04711 24.4473 3.80682C23.9182 3.60091 23.1245 3.35682 21.6614 3.29ZM13.6841 20.1241C14.7541 20.5695 15.9455 20.6296 17.0549 20.2942C18.1643 19.9587 19.1228 19.2485 19.7667 18.2849C20.4107 17.3212 20.7001 16.1639 20.5855 15.0106C20.471 13.8573 19.9596 12.7795 19.1386 11.9614C18.6153 11.4384 17.9826 11.0379 17.2859 10.7888C16.5893 10.5397 15.846 10.4482 15.1098 10.5208C14.3735 10.5935 13.6625 10.8284 13.0279 11.2088C12.3933 11.5892 11.851 12.1056 11.44 12.7207C11.0289 13.3359 10.7593 14.0345 10.6507 14.7663C10.5421 15.4981 10.597 16.2449 10.8116 16.953C11.0263 17.661 11.3952 18.3127 11.8919 18.861C12.3886 19.4093 13.0007 19.8407 13.6841 20.1241ZM10.1482 10.0482C10.8641 9.33224 11.7141 8.76432 12.6495 8.37686C13.5849 7.98939 14.5875 7.78996 15.6 7.78996C16.6125 7.78996 17.6151 7.98939 18.5505 8.37686C19.4859 8.76432 20.3359 9.33224 21.0518 10.0482C21.7678 10.7641 22.3357 11.6141 22.7231 12.5495C23.1106 13.4849 23.31 14.4875 23.31 15.5C23.31 16.5125 23.1106 17.5151 22.7231 18.4505C22.3357 19.3859 21.7678 20.2359 21.0518 20.9518C19.6059 22.3977 17.6448 23.21 15.6 23.21C13.5552 23.21 11.5941 22.3977 10.1482 20.9518C8.70227 19.5059 7.88996 17.5448 7.88996 15.5C7.88996 13.4552 8.70227 11.4941 10.1482 10.0482ZM25.02 8.93818C25.1974 8.77082 25.3394 8.56956 25.4377 8.34633C25.5359 8.12309 25.5884 7.88241 25.5919 7.63854C25.5955 7.39467 25.5501 7.15257 25.4584 6.92656C25.3667 6.70055 25.2306 6.49524 25.0581 6.32278C24.8857 6.15032 24.6804 6.01421 24.4543 5.92252C24.2283 5.83083 23.9862 5.78542 23.7424 5.78898C23.4985 5.79253 23.2578 5.84498 23.0346 5.94322C22.8113 6.04146 22.6101 6.18349 22.4427 6.36091C22.1172 6.70595 21.939 7.16426 21.946 7.63854C21.9529 8.11283 22.1444 8.56574 22.4798 8.90115C22.8152 9.23656 23.2681 9.42804 23.7424 9.43495C24.2167 9.44187 24.675 9.26367 25.02 8.93818Z"
                                />
                            </svg>
                        </SocialLink>

                        <SocialLink id="github" href="https://www.github.com/raflymln">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                                />
                            </svg>
                        </SocialLink>

                        <SocialLink id="linkedin" href="https://www.linkedin.com/in/raflymln">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.7099e-07 2.50637C3.7099e-07 1.84164 0.264063 1.20413 0.734097 0.7341C1.20413 0.264066 1.84163 3.34134e-06 2.50636 3.34134e-06H27.4909C27.8203 -0.000534684 28.1466 0.0639073 28.4511 0.18964C28.7556 0.315372 29.0323 0.499926 29.2653 0.732735C29.4984 0.965543 29.6833 1.24204 29.8093 1.54638C29.9354 1.85073 30.0002 2.17695 30 2.50637V27.4909C30.0004 27.8204 29.9357 28.1467 29.8099 28.4512C29.684 28.7557 29.4993 29.0324 29.2664 29.2654C29.0335 29.4985 28.7569 29.6833 28.4525 29.8093C28.148 29.9354 27.8218 30.0002 27.4923 30H2.50636C2.17711 30 1.85108 29.9351 1.5469 29.8091C1.24273 29.683 0.96637 29.4983 0.733615 29.2654C0.50086 29.0325 0.316271 28.7561 0.190394 28.4518C0.0645181 28.1476 -0.000178767 27.8215 3.7099e-07 27.4923V2.50637ZM11.8745 11.4382H15.9368V13.4782C16.5232 12.3055 18.0232 11.25 20.2773 11.25C24.5986 11.25 25.6227 13.5859 25.6227 17.8718V25.8109H21.2495V18.8482C21.2495 16.4073 20.6632 15.03 19.1741 15.03C17.1082 15.03 16.2491 16.515 16.2491 18.8482V25.8109H11.8745V11.4382ZM4.37455 25.6241H8.74909V11.25H4.37455V25.6227V25.6241ZM9.375 6.56182C9.38325 6.93637 9.3166 7.3088 9.17896 7.65725C9.04133 8.0057 8.83548 8.32314 8.5735 8.59096C8.31152 8.85877 7.99868 9.07156 7.65335 9.21683C7.30802 9.3621 6.93714 9.43694 6.5625 9.43694C6.18786 9.43694 5.81698 9.3621 5.47165 9.21683C5.12632 9.07156 4.81348 8.85877 4.5515 8.59096C4.28952 8.32314 4.08367 8.0057 3.94604 7.65725C3.8084 7.3088 3.74175 6.93637 3.75 6.56182C3.76619 5.82662 4.06962 5.12699 4.5953 4.61276C5.12098 4.09852 5.82712 3.81057 6.5625 3.81057C7.29788 3.81057 8.00402 4.09852 8.5297 4.61276C9.05538 5.12699 9.35881 5.82662 9.375 6.56182Z"
                                />
                            </svg>
                        </SocialLink>

                        <SocialLink id="behance" href="https://www.behance.net/raflymln">
                            <svg className="mix-blend-hard-light text-black fill-current opacity-75" width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8215 13.6038C13.1239 13.3929 13.2699 13.0446 13.2699 12.5658C13.2803 12.3382 13.2317 12.1138 13.1274 11.9096C13.0336 11.7455 12.8945 11.6083 12.7242 11.5112C12.5476 11.408 12.3515 11.3397 12.1472 11.3103C11.9248 11.2701 11.6989 11.25 11.4764 11.2533H9.03299V13.9219H11.678C12.1333 13.9252 12.5192 13.8181 12.8215 13.6038V13.6038ZM13.2317 16.0145C12.8911 15.7634 12.4357 15.6395 11.8692 15.6395H9.02604V18.7868H11.8136C12.0743 18.7868 12.3141 18.7634 12.547 18.7165C12.7673 18.675 12.9773 18.5932 13.1656 18.4754C13.3429 18.365 13.4854 18.2143 13.5932 18.0201C13.6974 17.8259 13.7496 17.5781 13.7496 17.2801C13.7496 16.6875 13.5758 16.269 13.2317 16.0145V16.0145ZM16.0088 0C7.40982 0 0.4375 6.71652 0.4375 15C0.4375 23.2835 7.40982 30 16.0088 30C24.6078 30 31.5801 23.2835 31.5801 15C31.5801 6.71652 24.6078 0 16.0088 0ZM19.0153 9.60603H23.8257V10.7344H19.0153V9.60603ZM16.0088 18.9107C15.7838 19.3221 15.4625 19.6775 15.0703 19.9487C14.6602 20.2232 14.2049 20.4241 13.7218 20.5413C13.2163 20.6718 12.6949 20.736 12.1716 20.7321H6.41576V9.31138H12.0117C12.5782 9.31138 13.0926 9.36161 13.5619 9.45536C14.0276 9.54911 14.4239 9.70982 14.7575 9.92746C15.0877 10.1451 15.3484 10.4364 15.5326 10.798C15.7134 11.1562 15.8072 11.6049 15.8072 12.1373C15.8072 12.7132 15.6716 13.1886 15.4005 13.5737C15.126 13.9587 14.7297 14.2701 14.191 14.5145C14.9244 14.7154 15.4631 15.0737 15.8176 15.5759C16.1791 16.0848 16.3564 16.6942 16.3564 17.4107C16.3564 17.9933 16.2417 18.4922 16.0088 18.9107ZM25.6991 17.1429H19.4984C19.4984 17.7924 19.7313 18.4152 20.0823 18.75C20.4369 19.0815 20.9443 19.2489 21.6082 19.2489C22.0878 19.2489 22.4945 19.1317 22.8421 18.9007C23.1862 18.6696 23.3947 18.4252 23.4712 18.1708H25.5497C25.216 19.1652 24.7086 19.875 24.0204 20.3036C23.3391 20.7321 22.5049 20.9464 21.5352 20.9464C20.8574 20.9464 20.2492 20.8393 19.7035 20.635C19.1787 20.4375 18.706 20.1362 18.3167 19.7478C17.9329 19.3489 17.6362 18.8798 17.4443 18.3683C17.2322 17.8025 17.128 17.2065 17.1349 16.6071C17.1349 15.9877 17.2427 15.4118 17.4512 14.8761C17.8509 13.8348 18.6816 13.0011 19.7417 12.5692C20.3083 12.3415 20.9165 12.2277 21.5317 12.2344C22.2616 12.2344 22.8942 12.3683 23.4434 12.6429C23.9721 12.905 24.4311 13.2808 24.785 13.7411C25.1361 14.1998 25.3828 14.7221 25.5393 15.3114C25.6887 15.8906 25.7408 16.5 25.6991 17.1429V17.1429ZM21.4587 13.942C21.0834 13.942 20.7671 14.0056 20.5238 14.1295C20.2805 14.2533 20.0789 14.4074 19.9259 14.5848C19.7803 14.7562 19.6726 14.9544 19.6096 15.1674C19.554 15.3449 19.5158 15.5257 19.5019 15.7098H23.3426C23.287 15.1306 23.0784 14.702 22.8004 14.4007C22.5084 14.1027 22.0392 13.942 21.4587 13.942V13.942Z" />
                            </svg>
                        </SocialLink>
                    </article>

                    <div className="font-comfortaa text-sm leading-6 text-center max-w-md space-y-4 text-black">
                        <p className="font-bold">
                            Copyright © 2021 - {new Date().getFullYear()}{" "}
                            <a href="https://raflymaulana.me" rel={"noreferrer"}>
                                Raul Mahya
                            </a>
                            .
                        </p>
                        <p>Website Licensed Under GNU GPLv3. Modification is possible while copyright and license notices must be preserved.</p>
                    </div>

                    <a
                        href="https://runes.asia"
                        target={"_blank"}
                        rel="noreferrer"
                        className="flex justify-center items-center space-x-2 bg-[#292525] text-[#FFC977] rounded-lg px-6 py-5 hover:opacity-75 duration-200">
                        <p className="leading-none text-lg font-comfortaa font-bold mt-0.5">Proudly Powered By</p>

                        <svg className="fill-current h-5 -mt-1.5" viewBox="0 0 851 245">
                            <path d="M172.6 244.088C161.202 244.088 150.648 240.607 140.939 233.644C131.229 226.681 121.414 214.866 111.493 198.198L79.8314 145.345H67.1667L66.1663 244.044H24.6893L25.6898 73.1868C25.6898 62.4264 24.2122 54.5143 21.2571 49.4505C18.302 44.1758 12.3918 41.5384 3.52653 41.5384H0.360352V32.0439H87.7468C109.277 32.0439 128.907 36.0527 146.638 44.0703C164.368 51.8769 173.234 66.9626 173.234 89.3275C173.234 104.73 168.484 116.545 158.986 124.774C149.698 132.791 137.35 138.804 121.942 142.813L155.186 198.198C167.64 219.086 180.727 230.69 194.447 233.011V240.923C192.758 241.767 189.698 242.506 185.265 243.139C180.832 243.771 176.611 244.088 172.6 244.088ZM86.1638 132.686C97.9842 132.686 108.01 129.204 116.242 122.242C124.686 115.068 128.907 103.886 128.907 88.6945C128.907 73.5033 124.791 62.4264 116.559 55.4637C108.327 48.2901 98.4063 44.7033 86.797 44.7033C81.309 44.7033 74.7655 45.4418 67.1667 46.9187V132.686H86.1638Z" />
                            <path d="M271.452 244.088C251.4 244.088 236.624 239.446 227.125 230.163C217.627 220.879 212.878 206.11 212.878 185.855V133.319C212.878 122.558 211.4 114.646 208.445 109.582C205.49 104.308 199.58 101.67 190.714 101.67H187.548V92.1758H225.542C233.141 92.1758 238.946 93.4418 242.956 95.9736C246.967 98.5055 249.816 102.725 251.505 108.633C253.194 114.33 254.038 122.558 254.038 133.319V186.171C254.038 201.996 256.254 213.284 260.687 220.035C265.12 226.576 271.874 229.846 280.951 229.846C287.705 229.846 293.404 227.736 298.048 223.517C302.903 219.297 306.702 214.549 309.446 209.275V92.1758H350.606V244.044H323.694L312.612 226.681H311.029C300.264 238.286 287.072 244.088 271.452 244.088Z" />
                            <path d="M395.069 133.319C395.069 122.558 393.591 114.646 390.636 109.582C387.892 104.308 382.088 101.67 373.222 101.67H370.056V92.1758H401.401C408.578 92.1758 414.172 93.1253 418.182 95.0242C422.404 96.7121 425.675 99.6659 427.997 103.886C438.762 93.9692 454.171 89.011 474.223 89.011C494.276 89.011 509.262 93.7582 519.183 103.253C529.315 112.536 534.381 127.2 534.381 147.244V244.044H493.22V146.927C493.22 132.369 490.476 121.714 484.988 114.963C479.711 108.211 472.429 104.835 463.142 104.835C451.955 104.835 442.984 107.473 436.229 112.747V244.044H395.069V133.319Z" />
                            <path d="M636.393 244.088C621.829 244.088 609.059 240.712 598.083 233.96C587.107 227.209 578.558 218.031 572.437 206.426C566.527 194.611 563.571 181.319 563.571 166.549C563.571 150.092 566.527 136.062 572.437 124.457C578.558 112.853 586.896 104.097 597.449 98.189C608.003 92.0703 619.929 89.011 633.227 89.011C646.314 89.011 658.135 91.6484 668.688 96.9231C679.242 102.198 687.58 109.688 693.701 119.393C699.823 128.888 702.883 139.859 702.883 152.308L701.617 172.246H606.315C606.315 192.29 609.375 206.954 615.497 216.237C621.618 225.31 630.167 229.846 641.143 229.846C651.274 229.846 659.718 227.631 666.472 223.2C673.438 218.558 680.087 212.018 686.419 203.578L696.234 210.857C690.113 220.352 682.409 228.264 673.121 234.593C664.045 240.923 651.802 244.088 636.393 244.088ZM660.14 158.004C660.14 138.171 657.818 124.141 653.174 115.912C648.531 107.473 641.881 103.253 633.227 103.253C625.206 103.253 618.663 107.578 613.597 116.229C608.742 124.668 606.315 138.593 606.315 158.004H660.14Z" />
                            <path d="M785.454 244.088C760.758 244.088 743.766 239.763 734.478 231.112C731.101 227.947 728.99 223.517 728.146 217.82C727.302 211.912 726.879 203.789 726.879 193.451H737.961C739.861 204.422 744.188 213.284 750.942 220.035C757.697 226.576 767.09 229.846 779.121 229.846C800.229 229.846 810.783 222.673 810.783 208.325C810.783 202.84 808.461 198.303 803.817 194.717C799.385 191.13 792.208 187.121 782.287 182.69L765.823 175.727C752.314 169.82 742.183 163.385 735.428 156.422C728.674 149.459 725.296 141.02 725.296 131.103C725.296 117.811 730.784 107.473 741.76 100.088C752.948 92.7033 767.512 89.011 785.454 89.011C810.15 89.011 827.142 93.3363 836.429 101.987C839.806 105.152 841.917 109.582 842.762 115.279C843.606 120.976 844.028 129.099 844.028 139.648H832.946C831.047 128.677 826.719 119.921 819.965 113.38C813.21 106.629 803.818 103.253 791.786 103.253C782.71 103.253 775.955 105.257 771.522 109.266C767.09 113.064 764.873 118.233 764.873 124.774C764.873 130.048 766.668 134.479 770.256 138.066C774.055 141.442 779.755 144.818 787.353 148.193L806.35 156.106C821.97 162.646 833.157 169.292 839.912 176.044C846.878 182.585 850.36 191.235 850.36 201.996C850.36 215.499 844.345 225.943 832.313 233.328C820.493 240.501 804.873 244.088 785.454 244.088Z" />
                            <path d="M617.261 26.1517L632.637 0L648.275 25.9551L645.578 33.1648L632.637 70L626.957 53.3521L618.931 30.3464L617.261 26.1517Z" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Illustrations */}
            <section id="illustration">
                <div className="absolute bottom-96 lg:bottom-64 left-0 w-full h-full z-10" data-aos="fadeInUp">
                    <div className="relative container w-full h-full flex items-center z-10">
                        <svg className="absolute bottom-72 md:bottom-0 left-0 h-72 md:h-128" viewBox="0 0 517 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 258.5C0 401.266 115.734 517 258.498 517C401.263 517 516.997 401.266 516.997 258.5C516.997 115.734 401.263 0 258.498 0C115.734 0 0 115.734 0 258.5Z"
                                fill="#D1FAFF"
                            />
                            <path d="M223.683 188.388C256.566 199.939 282.69 198.424 302.054 183.843" stroke="#2C302E" strokeWidth="2.22222" strokeLinecap="round" />
                            <path
                                d="M189.531 135.14C189.217 128.16 184.601 122.181 179.22 121.786C173.839 121.39 169.731 126.727 170.044 133.707C170.358 140.687 174.974 146.666 180.355 147.061C185.736 147.457 189.844 142.12 189.531 135.14Z"
                                fill="#2C302E"
                            />
                            <path
                                d="M343.729 127.057C343.416 120.078 338.8 114.099 333.419 113.703C328.037 113.308 323.929 118.645 324.243 125.625C324.556 132.604 329.172 138.583 334.553 138.979C339.934 139.374 344.042 134.037 343.729 127.057Z"
                                fill="#2C302E"
                            />
                        </svg>
                    </div>
                </div>

                <img src={Images.SeaFloor} className="absolute bottom-0 left-0 object-cover h-full min-w-full object-left z-20" alt="" />
            </section>
        </footer>
    );
}
