// @flow
import React from 'react'

export default undefined

type Props = {
  width?: number,
  height?: number,
}

// -------------------------------------

export const ArrowIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 19 18" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10.5333333 1 18 9 10.5333333 17" />
      <path d="M18,9 L0.970613634,9" />
    </g>
  </svg>
)

ArrowIcon.defaultProps = {
  width: 19,
  height: 18,
}

// -------------------------------------

export const CalendarIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <defs>
      <linearGradient x1="60%" y1="0%" x2="45%" y2="100%" id="CalendarGradient">
        <stop stopColor="#ff0092" offset="0%" />
        <stop stopColor="#d800ff" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path fill="url(#CalendarGradient)" d="M26,21 L26,23 C26,23.552 25.553,24 25,24 L23,24 C22.447,24 22,23.552 22,23 L22,21 C22,20.448 22.447,20 23,20 L25,20 C25.553,20 26,20.448 26,21 Z M18,21 L18,23 C18,23.552 17.553,24 17,24 L15,24 C14.447,24 14,23.552 14,23 L14,21 C14,20.448 14.447,20 15,20 L17,20 C17.553,20 18,20.448 18,21 Z M10,21 L10,23 C10,23.552 9.553,24 9,24 L7,24 C6.447,24 6,23.552 6,23 L6,21 C6,20.448 6.447,20 7,20 L9,20 C9.553,20 10,20.448 10,21 Z M23,12 L25,12 C25.553,12 26,12.448 26,13 L26,15 C26,15.552 25.553,16 25,16 L23,16 C22.447,16 22,15.552 22,15 L22,13 C22,12.448 22.447,12 23,12 Z M18,13 L18,15 C18,15.552 17.553,16 17,16 L15,16 C14.447,16 14,15.552 14,15 L14,13 C14,12.448 14.447,12 15,12 L17,12 C17.553,12 18,12.448 18,13 Z M10,13 L10,15 C10,15.552 9.553,16 9,16 L7,16 C6.447,16 6,15.552 6,15 L6,13 C6,12.448 6.447,12 7,12 L9,12 C9.553,12 10,12.448 10,13 Z M30,30 L2,30 L2,5 L10,5 L10,6 C10,6.552 10.447,7 11,7 C11.553,7 12,6.552 12,6 L12,5 L20,5 L20,6 C20,6.552 20.447,7 21,7 C21.553,7 22,6.552 22,6 L22,5 L30,5 L30,30 Z M30,3 L22,3 L22,1 C22,0.448 21.553,0 21,0 C20.447,0 20,0.448 20,1 L20,3 L12,3 L12,1 C12,0.448 11.553,0 11,0 C10.447,0 10,0.448 10,1 L10,3 L2,3 C0.897,3 0,3.897 0,5 L0,30 C0,31.103 0.897,32 2,32 L30,32 C31.103,32 32,31.103 32,30 L32,5 C32,3.897 31.103,3 30,3 Z" />
    </g>
  </svg>
)

CalendarIcon.defaultProps = {
  width: 32,
  height: 32,
}

// -------------------------------------

export const MapIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M0,5.484 C0,10.3155 5.48351648,15 5.48351648,15 C5.48351648,15 11,10.3155 11,5.484 C11,2.454 8.76295133,0 5.48351648,0 C2.20408163,0 0,2.454 0,5.484 Z" />
      <path d="M30.6666667,40 L8.349,40 C3.73826667,40 0,36.2321818 0,31.585 L0,31.415 C0,26.7662727 3.73826667,23 8.349,23 L37.651,23 C42.2617333,23 46,19.2321818 46,14.585 L46,14.415 C46,9.76781818 42.2617333,6 37.651,6 L16.8666667,6" />
      <path d="M46,46 L34,34" />
      <path d="M34,46 L46,34" />
    </g>
  </svg>
)

MapIcon.defaultProps = {
  width: 48,
  height: 48,
}

// -------------------------------------

export const MenuIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 39 25" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M0,0 L36.2999992,0" />
      <path d="M0,11.4782609 L36.2999992,11.4782609" />
      <path d="M0,22.9565217 L36.2999992,22.9565217" />
    </g>
  </svg>
)

MenuIcon.defaultProps = {
  width: 39,
  height: 25,
}

// -------------------------------------

const LogoGradient = () => (
  <linearGradient x1="82%" y1="0%" x2="2%" y2="96%" id="LogoGradient">
    <stop stopColor="#00f8ff" offset="0%" />
    <stop stopColor="#ff005c" offset="100%" />
  </linearGradient>
)

export const TrvrslIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 277 180" {...props}>
    <defs>
      <LogoGradient />
      <path id="TrvrslIcon-path" d="M773.768357,95.2584525 L773.76555,95.2565797 L747.295683,147.32446 L729.088643,140.833182 C729.071801,140.827563 729.055895,140.829436 729.038117,140.826627 C729.018468,140.821008 728.999755,140.813517 728.97917,140.811644 C728.970749,140.810707 728.962328,140.808835 728.954843,140.808835 C728.945487,140.807898 728.938001,140.809771 728.928645,140.809771 C728.903382,140.809771 728.879055,140.81539 728.853792,140.819135 C728.83695,140.821008 728.820108,140.821945 728.803266,140.827563 C728.793909,140.829436 728.784553,140.831309 728.77426,140.835991 C728.770518,140.837864 728.767711,140.836927 728.764904,140.837864 C728.75929,140.8388 728.756483,140.843482 728.751805,140.846292 C728.728413,140.854719 728.7097,140.869702 728.68818,140.881876 C728.673209,140.892176 728.657303,140.899668 728.642332,140.911841 C728.636718,140.915587 728.630169,140.916523 728.62549,140.922142 L706.127506,160.538313 L688.005611,139.822782 C687.995319,139.811545 687.98222,139.806863 687.970992,139.796562 C687.9607,139.786262 687.95415,139.774088 687.943858,139.764724 C687.939179,139.760978 687.933566,139.760042 687.928887,139.757233 C687.923273,139.75255 687.918595,139.746932 687.91111,139.743186 C687.902689,139.738504 687.893332,139.735695 687.884911,139.731013 C687.860584,139.716966 687.837192,139.707602 687.811929,139.698238 C687.796023,139.691683 687.781988,139.683255 687.767018,139.67951 C687.759532,139.678573 687.752983,139.675764 687.746433,139.674827 C687.741755,139.673891 687.737077,139.673891 687.732398,139.674827 C687.72772,139.674827 687.723042,139.674827 687.718363,139.672955 C687.690293,139.669209 687.665031,139.669209 687.636025,139.670145 C687.629475,139.671082 687.622926,139.671082 687.616376,139.670145 C687.60702,139.670145 687.598599,139.669209 687.591113,139.670145 C687.581757,139.671082 687.574271,139.671082 687.56585,139.672955 C687.563979,139.674827 687.561172,139.672955 687.558365,139.672955 C687.549944,139.674827 687.54433,139.680446 687.535909,139.683255 C687.512518,139.68981 687.490062,139.699174 687.46667,139.709475 C687.449828,139.716966 687.433922,139.721649 687.418016,139.731013 C687.413338,139.733822 687.406788,139.733822 687.403045,139.736631 C687.399303,139.738504 687.398367,139.741313 687.396496,139.74225 C687.386203,139.749741 687.377782,139.759105 687.369362,139.766597 C687.361876,139.772215 687.35252,139.774088 687.345034,139.779707 C687.333806,139.790007 687.329128,139.804054 687.318836,139.815291 C687.308544,139.825591 687.29638,139.830273 687.287023,139.842447 L678.880103,150.513914 L636.529251,104.312718 C636.518958,104.302418 636.505859,104.297735 636.495567,104.288371 C636.482468,104.276198 636.472175,104.260279 636.457205,104.249978 C636.446912,104.243423 636.433813,104.239677 636.424457,104.234059 C636.412293,104.227504 636.405743,104.216267 636.394515,104.210648 C636.391708,104.209712 636.388901,104.209712 636.386094,104.208775 C636.369252,104.201284 636.352411,104.198475 636.335569,104.193793 C636.322469,104.18911 636.311241,104.17881 636.297207,104.175064 C636.295335,104.174128 636.292528,104.175064 636.290657,104.174128 C636.284107,104.173191 636.277558,104.173191 636.271008,104.174128 C636.264458,104.174128 636.258844,104.174128 636.254166,104.173191 C636.239196,104.170382 636.224225,104.163827 636.21019,104.162891 C636.190541,104.161954 636.172764,104.167573 636.15405,104.169446 C636.147501,104.170382 636.140951,104.169446 636.135337,104.168509 C636.126916,104.167573 636.117559,104.167573 636.109139,104.168509 C636.107267,104.168509 636.105396,104.167573 636.10446,104.168509 C636.092297,104.170382 636.08294,104.17881 636.070776,104.181619 C636.059548,104.184428 636.046449,104.183492 636.034286,104.186301 C636.016508,104.193793 636.000602,104.205966 635.98376,104.21533 C635.969725,104.221885 635.953819,104.224694 635.938848,104.233122 C635.92762,104.239677 635.918264,104.250914 635.907036,104.259342 C635.897679,104.266833 635.885515,104.270579 635.877094,104.279943 C635.874287,104.281816 635.870545,104.281816 635.868673,104.284626 C635.857446,104.294926 635.852767,104.309909 635.842475,104.32021 C635.831247,104.333319 635.817212,104.342684 635.80692,104.355794 C635.798499,104.367031 635.794756,104.380141 635.787271,104.394187 C635.781657,104.403551 635.7723,104.410106 635.766686,104.420407 L581.049194,213.922802 C580.934107,214.154099 581.027673,214.435025 581.259717,214.551142 C581.324278,214.58298 581.393517,214.597026 581.460885,214.597963 L581.460885,214.600772 L609.19951,215.011861 L656.876149,223.399394 L656.877084,223.391903 C656.903283,223.396585 656.929481,223.405949 656.95568,223.405949 C656.982814,223.405949 657.009948,223.404077 657.038018,223.399394 C657.041761,223.398458 657.044568,223.395649 657.049246,223.395649 L657.049246,223.396585 L692.214218,216.237638 L703.069764,215.03059 L714.116185,214.167209 L714.078759,213.699934 L714.13022,214.165336 L724.883779,212.970461 L757.429834,227.759376 L757.433577,227.752821 C757.475681,227.771549 757.51685,227.791214 757.564569,227.796833 C757.585154,227.798706 757.603867,227.800579 757.621645,227.801515 L793.921574,227.862382 L793.922509,227.862382 C793.935608,227.862382 793.948708,227.862382 793.963678,227.861446 C794.011397,227.8577 794.054438,227.838972 794.097478,227.822116 L794.099349,227.828671 L829.002335,213.563216 L857.536273,213.563216 C857.65978,213.563216 857.781416,213.516395 857.873111,213.42088 C858.031238,213.257006 858.038723,213.009791 857.911473,212.829061 L857.918958,212.824379 L774.564606,95.1975851 L774.561799,95.1994579 C774.487881,95.0964515 774.376538,95.0215377 774.240867,95.0037457 C774.222153,95.0018728 774.20344,95 774.184727,95 C774.001337,95 773.846017,95.1030064 773.768357,95.2584525 Z M774.496302,96.7211439 L854.238066,209.24912 L787.119313,144.252059 C787.116506,144.24925 787.110892,144.248313 787.10715,144.244567 C787.1006,144.238949 787.096858,144.23333 787.091244,144.226775 C787.086565,144.224903 787.083758,144.223966 787.080951,144.222093 C787.061302,144.207111 787.040718,144.198683 787.019198,144.187446 C787.016391,144.184636 787.010777,144.1837 787.007034,144.180891 C786.988321,144.171527 786.97335,144.15748 786.953701,144.150925 C786.944345,144.148116 786.935924,144.143434 786.927503,144.141561 C786.925631,144.141561 786.925631,144.140625 786.924696,144.140625 C786.922824,144.139688 786.920018,144.140625 786.918146,144.139688 C786.896626,144.133133 786.873234,144.135942 786.850779,144.133133 C786.823644,144.129388 786.797446,144.122833 786.769376,144.124705 C786.763762,144.124705 786.760019,144.122833 786.754405,144.122833 C786.752534,144.122833 786.750663,144.123769 786.749727,144.124705 C786.743177,144.124705 786.738499,144.124705 786.731014,144.125642 C786.731014,144.125642 786.730078,144.126578 786.730078,144.126578 C786.707622,144.129388 786.687973,144.140625 786.667389,144.146243 C786.643062,144.152798 786.618734,144.158417 786.595343,144.169654 C786.587858,144.172463 786.580372,144.173399 786.574758,144.175272 C786.57008,144.179018 786.565402,144.182764 786.559788,144.184636 C786.558852,144.185573 786.556981,144.185573 786.556045,144.186509 C786.543882,144.194001 786.536396,144.207111 786.524233,144.215538 C786.516747,144.221157 786.512069,144.225839 786.503648,144.232394 C786.489613,144.243631 786.471836,144.250186 786.458736,144.264232 C786.454994,144.267978 786.452187,144.27266 786.44938,144.277342 C786.444701,144.282024 786.439087,144.28577 786.435345,144.290452 C786.431602,144.294198 786.428795,144.299816 786.425988,144.303562 C786.410082,144.3251 786.401661,144.34851 786.388562,144.371921 C786.377334,144.393459 786.363299,144.411251 786.355814,144.432788 C786.353007,144.44028 786.351135,144.444962 786.349264,144.45339 C786.348328,144.454326 786.345521,144.456199 786.344586,144.459008 L762.472114,226.622559 L758.156843,226.837 L774.496302,96.7211439 Z M725.567748,212.252225 L773.293977,98.7868911 L757.238023,226.643161 L725.567748,212.252225 Z M636.923164,106.127504 L678.294379,151.259306 L658.041983,176.971585 L650.033655,180.804361 L636.923164,106.127504 Z M636.109139,106.904735 L649.170975,181.303474 L610.032249,213.2954 L636.109139,106.904735 Z M768.724206,107.239037 L724.633958,212.05464 L714.889977,213.139017 L768.724206,107.239037 Z M582.219706,213.675587 L634.734652,108.577185 L608.878578,214.069821 L582.219706,213.675587 Z M658.951446,177.331171 L687.398367,141.211496 L702.462519,214.155035 L692.334918,215.281551 L658.951446,177.331171 Z M729.733314,142.057085 L746.868085,148.16724 L738.434967,164.755958 L729.733314,142.057085 Z M713.408825,168.471681 L728.842564,142.34644 L737.792167,165.694253 C737.812752,165.748565 737.856728,165.780404 737.892283,165.821606 L733.649993,174.167937 L713.408825,168.471681 Z M688.626891,142.531851 L722.600765,195.904168 L713.781218,213.253261 L703.399117,214.065139 L688.626891,142.531851 Z M706.744107,161.242502 L727.054514,143.53195 L712.623805,167.963204 L706.744107,161.242502 Z M691.351537,145.068619 L705.72985,161.505637 L712.298195,169.012933 L723.507421,194.118411 L723.092923,194.934971 L691.351537,145.068619 Z M787.436503,146.592178 L808.213805,181.684597 C808.217548,181.688343 808.223162,181.690216 808.226904,181.695834 L808.222226,181.697707 L828.211701,212.87401 L794.3342,226.720884 L787.436503,146.592178 Z M763.373157,226.874457 L786.543882,147.128748 L793.412574,226.92596 L763.373157,226.874457 Z M809.013796,181.197658 L788.972859,147.351616 L856.380731,212.626794 L829.165141,212.626794 L809.013796,181.197658 Z M713.531397,169.479271 L733.216782,175.020081 L724.052912,193.045271 L713.531397,169.479271 Z M650.202074,181.76232 L658.224437,177.92299 L691.258907,215.476327 L657.334623,222.384313 L650.202074,181.76232 Z M610.33166,214.259914 L649.357172,182.360694 L656.379312,222.360902 L610.33166,214.259914 Z M772.517378,255.010197 C771.302889,255.551449 770.357871,256.306205 769.684194,257.276338 C769.009582,258.245535 768.67368,259.337403 768.67368,260.552879 C768.67368,261.674713 768.916016,262.610199 769.399753,263.361209 C769.88349,264.110347 770.652604,264.746178 771.706159,265.268701 C772.759714,265.792161 774.178177,266.234152 775.962484,266.593738 C777.556851,266.935533 778.67216,267.292309 779.30841,267.663133 C779.943724,268.033019 780.262785,268.542433 780.262785,269.187628 C780.262785,269.928338 779.915654,270.503301 779.222329,270.911581 C778.52994,271.319861 777.537203,271.524001 776.246925,271.524001 C773.836661,271.524001 771.653762,270.840413 769.699165,269.4723 L768.275088,272.664563 C769.205136,273.405273 770.376584,273.9793 771.791304,274.38758 C773.206025,274.796796 774.680628,275 776.219791,275 C778.857421,275 780.916812,274.445638 782.397965,273.333169 C783.878182,272.222572 784.619226,270.717742 784.619226,268.816805 C784.619226,267.23987 784.043794,265.996301 782.895737,265.084226 C781.746744,264.172151 779.87355,263.430504 777.273346,262.86116 C776.152423,262.633609 775.288808,262.40044 774.680628,262.163525 C774.074319,261.925674 773.642979,261.655048 773.385672,261.351647 C773.130236,261.04731 773.002051,260.667123 773.002051,260.211085 C773.002051,259.432918 773.342631,258.81488 774.025664,258.358842 C774.709633,257.902805 775.620968,257.675254 776.760603,257.675254 C778.90514,257.675254 780.870029,258.358842 782.654336,259.726018 L784.077477,256.534692 C783.280294,255.81271 782.217382,255.243366 780.887807,254.825721 C779.560103,254.408077 778.174388,254.198319 776.731598,254.198319 C775.13723,254.198319 773.731867,254.468945 772.517378,255.010197 Z M804.91934,254.454898 L804.91934,274.745293 L818.41626,274.745293 L818.41626,271.125085 L809.361862,271.125085 L809.361862,254.454898 L804.91934,254.454898 Z M732.027556,254.454898 L732.027556,274.745293 L736.413002,274.745293 L736.413002,266.565646 L739.28829,266.565646 C739.933897,266.565646 740.470031,266.670525 740.896693,266.879347 C741.32429,267.088169 741.641479,267.458993 741.851068,267.989944 L744.441915,274.745293 L749.140807,274.745293 L746.692181,268.446918 C746.159789,267.041348 745.297109,266.214487 744.100398,265.967272 C745.429038,265.549628 746.449845,264.856675 747.160947,263.887478 C747.873922,262.918282 748.230409,261.759927 748.230409,260.410543 C748.230409,258.491814 747.621293,257.019759 746.406804,255.99344 C745.19138,254.967121 743.408009,254.454898 741.05482,254.454898 L732.027556,254.454898 Z M736.355927,257.873775 L740.398921,257.873775 C741.670485,257.873775 742.601468,258.088216 743.189999,258.515225 C743.777595,258.944106 744.072328,259.612711 744.072328,260.524787 C744.072328,261.436862 743.777595,262.105467 743.189999,262.534348 C742.601468,262.960421 741.670485,263.174861 740.398921,263.174861 L736.355927,263.174861 L736.355927,257.873775 Z M708.878351,254.454898 L702.500882,269.187628 L696.180487,254.454898 L691.56674,254.454898 L700.678213,274.745293 L704.238405,274.745293 L713.348943,254.454898 L708.878351,254.454898 Z M657.233571,254.454898 L657.233571,274.745293 L661.619018,274.745293 L661.619018,266.565646 L664.495241,266.565646 C665.140848,266.565646 665.676982,266.670525 666.103644,266.879347 C666.531241,267.088169 666.84843,267.458993 667.058019,267.989944 L669.648866,274.745293 L674.346823,274.745293 L671.898196,268.446918 C671.36674,267.041348 670.503125,266.214487 669.307349,265.967272 C670.635989,265.549628 671.656796,264.856675 672.367898,263.887478 C673.079937,262.918282 673.435488,261.759927 673.435488,260.410543 C673.435488,258.491814 672.828244,257.019759 671.613755,255.99344 C670.398331,254.967121 668.614024,254.454898 666.259899,254.454898 L657.233571,254.454898 Z M661.561942,257.873775 L665.604936,257.873775 C666.877436,257.873775 667.807484,258.088216 668.396015,258.515225 C668.984546,258.944106 669.278344,259.612711 669.278344,260.524787 C669.278344,261.436862 668.984546,262.105467 668.396015,262.534348 C667.807484,262.960421 666.877436,263.174861 665.604936,263.174861 L661.561942,263.174861 L661.561942,257.873775 Z M620.589319,254.454898 L620.589319,258.07417 L626.938719,258.07417 L626.938719,274.745293 L631.438316,274.745293 L631.438316,258.07417 L637.788651,258.07417 L637.788651,254.454898 L620.589319,254.454898 Z" />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-581.000000, -95.000000)">
      <use fill="url(#LogoGradient)" xlinkHref="#TrvrslIcon-path" />
    </g>
  </svg>
)

TrvrslIcon.defaultProps = {
  width: 277,
  height: 180,
}

export const TrvrslFooterIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 164 75" {...props}>
    <defs>
      <LogoGradient />
      <path id="TrvrslFooterIcon-path" d="M113.836653,0.145894857 L113.834996,0.144837648 L98.2035859,29.5368367 L87.4516736,25.8725499 C87.4417278,25.8693783 87.4323346,25.8704355 87.4218363,25.8688497 C87.4102329,25.8656781 87.3991821,25.8614492 87.3870262,25.860392 C87.3820533,25.8598634 87.3770804,25.8588062 87.3726601,25.8588062 C87.3671347,25.8582776 87.3627143,25.8593348 87.3571889,25.8593348 C87.3422703,25.8593348 87.3279042,25.8625064 87.3129855,25.8646208 C87.3030398,25.8656781 87.293094,25.8662067 87.2831483,25.8693783 C87.2776229,25.8704355 87.2720974,25.8714927 87.2660195,25.8741357 C87.2638093,25.8751929 87.2621517,25.8746643 87.2604941,25.8751929 C87.2571788,25.8757215 87.2555212,25.8783646 87.2527585,25.8799504 C87.2389449,25.8847078 87.2278941,25.8931655 87.2151856,25.9000374 C87.206345,25.905852 87.1969518,25.9100808 87.1881111,25.9169527 C87.1847958,25.9190671 87.180928,25.9195957 87.1781653,25.9227674 L73.8922959,36.9959756 L63.1906649,25.3021856 C63.1845869,25.2958423 63.1768514,25.2931993 63.1702208,25.2873847 C63.1641429,25.28157 63.1602751,25.2746982 63.1541971,25.2694121 C63.1514344,25.2672977 63.1481192,25.2667691 63.1453565,25.2651833 C63.1420412,25.2625403 63.1392785,25.2593686 63.1348582,25.2572542 C63.1298853,25.2546112 63.1243599,25.2530254 63.119387,25.2503824 C63.1050209,25.2424533 63.0912074,25.2371672 63.0762887,25.2318812 C63.0668955,25.228181 63.0586074,25.2234235 63.0497667,25.2213091 C63.0453464,25.2207805 63.0414786,25.2191947 63.0376108,25.2186661 C63.0348481,25.2181375 63.0320854,25.2181375 63.0293227,25.2186661 C63.02656,25.2186661 63.0237973,25.2186661 63.0210345,25.2176089 C63.0044583,25.2154945 62.9895397,25.2154945 62.9724109,25.2160231 C62.9685431,25.2165517 62.9646753,25.2165517 62.9608075,25.2160231 C62.9552821,25.2160231 62.9503092,25.2154945 62.9458888,25.2160231 C62.9403634,25.2165517 62.9359431,25.2165517 62.9309702,25.2176089 C62.9298651,25.2186661 62.9282075,25.2176089 62.9265499,25.2176089 C62.921577,25.2186661 62.9182618,25.2218377 62.9132889,25.2234235 C62.8994753,25.2271238 62.8862143,25.2324098 62.8724008,25.2382245 C62.862455,25.2424533 62.8530618,25.2450963 62.8436686,25.2503824 C62.8409059,25.2519682 62.8370381,25.2519682 62.8348279,25.253554 C62.8326178,25.2546112 62.8320652,25.256197 62.8309601,25.2567256 C62.8248822,25.2609544 62.8199093,25.2662405 62.8149364,25.2704693 C62.8105161,25.273641 62.8049907,25.2746982 62.8005703,25.2778698 C62.7939398,25.2836844 62.7911771,25.2916135 62.7850992,25.2979568 C62.7790212,25.3037714 62.7718382,25.3064144 62.7663127,25.3132863 L57.801724,31.3372638 L32.7920211,5.25697229 C32.7859431,5.25115764 32.7782075,5.24851462 32.7721296,5.24322858 C32.764394,5.23635672 32.758316,5.22737044 32.7494754,5.22155579 C32.7433974,5.21785556 32.7356618,5.21574114 32.7301364,5.21256951 C32.7229534,5.20886928 32.7190856,5.20252602 32.7124551,5.1993544 C32.7107974,5.19882579 32.7091398,5.19882579 32.7074822,5.19829719 C32.6975364,5.19406835 32.6875907,5.19248254 32.6776449,5.18983952 C32.6699093,5.18719649 32.6632788,5.18138184 32.6549907,5.17926742 C32.6538856,5.17873882 32.652228,5.17926742 32.6511229,5.17873882 C32.6472551,5.17821022 32.6433873,5.17821022 32.6395195,5.17873882 C32.6356517,5.17873882 32.6323365,5.17873882 32.6295738,5.17821022 C32.6207331,5.1766244 32.6118924,5.17292417 32.6036043,5.17239557 C32.5920009,5.17186696 32.5815026,5.17503859 32.5704518,5.1760958 C32.566584,5.1766244 32.5627162,5.1760958 32.559401,5.17556719 C32.5544281,5.17503859 32.5489027,5.17503859 32.5439298,5.17556719 C32.5428247,5.17556719 32.5417196,5.17503859 32.5411671,5.17556719 C32.533984,5.1766244 32.5284586,5.18138184 32.5212756,5.18296766 C32.5146451,5.18455347 32.5069095,5.18402487 32.4997264,5.18561068 C32.4892281,5.18983952 32.4798349,5.19671137 32.4698892,5.20199742 C32.461601,5.20569765 32.4522078,5.20728347 32.4433672,5.21204091 C32.4367367,5.21574114 32.4312112,5.22208439 32.4245807,5.22684183 C32.4190553,5.23107067 32.4118723,5.23318509 32.4068994,5.23847113 C32.4052418,5.23952834 32.4030316,5.23952834 32.4019265,5.24111416 C32.395296,5.24692881 32.3925333,5.25538648 32.3864554,5.26120113 C32.3798249,5.26860159 32.3715367,5.27388764 32.3654588,5.2812881 C32.3604859,5.28763136 32.3582757,5.29503182 32.3538554,5.30296089 C32.3505401,5.30824694 32.3450147,5.31194717 32.3416995,5.31776182 L0.0290505958,67.1311926 C-0.0389120549,67.2617579 0.0163421326,67.4203393 0.153372518,67.4858863 C0.191497907,67.5038588 0.232386006,67.5117879 0.272169021,67.5123165 L0.272169021,67.5139023 L16.6528255,67.7459597 L44.8075967,72.4806707 L44.8081493,72.4764419 C44.8236204,72.4790849 44.8390916,72.4843709 44.8545628,72.4843709 C44.8705865,72.4843709 44.8866102,72.4833137 44.9031865,72.4806707 C44.9053966,72.4801421 44.9070542,72.4785563 44.909817,72.4785563 L44.909817,72.4790849 L65.6759983,68.4379031 L72.0865891,67.7565318 L78.6098985,67.2691584 L78.5877968,67.0053847 L78.6181866,67.2681012 L84.9685504,66.5936018 L104.188167,74.9418535 L104.190377,74.9381533 C104.215242,74.9487254 104.239553,74.9598261 104.267733,74.9629977 C104.279889,74.9640549 104.29094,74.9651121 104.301438,74.9656407 L125.737853,75 L125.738405,75 C125.746141,75 125.753876,75 125.762717,74.9994714 C125.790897,74.997357 125.816314,74.9867849 125.841731,74.97727 L125.842836,74.9809702 L146.454305,66.9282085 L163.304622,66.9282085 C163.377558,66.9282085 163.449388,66.9017782 163.503537,66.8478606 C163.596917,66.7553548 163.601337,66.6158032 163.526191,66.5137825 L163.530612,66.5111395 L114.306866,0.111535561 L114.305209,0.11259277 C114.261558,0.0544462691 114.195805,0.0121579048 114.115687,0.00211441822 C114.104636,0.00105720911 114.093585,0 114.082534,0 C113.974236,0 113.882514,0.058146501 113.836653,0.145894857 Z M114.266531,0.971575171 L161.356912,64.4929273 L121.720873,27.8024851 C121.719216,27.8008993 121.7159,27.8003707 121.71369,27.7982563 C121.709822,27.7950847 121.707612,27.7919131 121.704297,27.7882128 C121.701534,27.7871556 121.699877,27.786627 121.698219,27.7855698 C121.686616,27.7771121 121.67446,27.7723547 121.661751,27.7660114 C121.660094,27.7644256 121.656778,27.763897 121.654568,27.7623112 C121.643517,27.7570252 121.634677,27.7490961 121.623073,27.7453959 C121.617548,27.74381 121.612575,27.741167 121.607602,27.7401098 C121.606497,27.7401098 121.606497,27.7395812 121.605944,27.7395812 C121.604839,27.7390526 121.603182,27.7395812 121.602077,27.7390526 C121.589368,27.7353524 121.575555,27.7369382 121.562294,27.7353524 C121.54627,27.7332379 121.530799,27.7295377 121.514223,27.7305949 C121.510907,27.7305949 121.508697,27.7295377 121.505382,27.7295377 C121.504277,27.7295377 121.503172,27.7300663 121.502619,27.7305949 C121.498751,27.7305949 121.495989,27.7305949 121.491568,27.7311235 C121.491568,27.7311235 121.491016,27.7316521 121.491016,27.7316521 C121.477755,27.7332379 121.466151,27.7395812 121.453995,27.7427528 C121.439629,27.7464531 121.425263,27.7496247 121.41145,27.7559679 C121.407029,27.7575538 121.402609,27.7580824 121.399294,27.7591396 C121.396531,27.761254 121.393768,27.7633684 121.390453,27.7644256 C121.389901,27.7649542 121.388796,27.7649542 121.388243,27.7654828 C121.38106,27.7697117 121.37664,27.7771121 121.369457,27.7818696 C121.365036,27.7850412 121.362274,27.7876842 121.357301,27.7913845 C121.349013,27.7977277 121.338514,27.8014279 121.330779,27.809357 C121.328568,27.8114714 121.326911,27.8141144 121.325253,27.8167575 C121.322491,27.8194005 121.319175,27.8215149 121.316965,27.8241579 C121.314755,27.8262724 121.313097,27.829444 121.31144,27.8315584 C121.302046,27.8437163 121.297074,27.8569314 121.289338,27.8701465 C121.282707,27.8823044 121.274419,27.8923479 121.269999,27.9045058 C121.268341,27.9087347 121.267236,27.9113777 121.266131,27.9161351 C121.265579,27.9166637 121.263921,27.9177209 121.263369,27.9193068 L107.165815,74.3001276 L104.617492,74.421178 L114.266531,0.971575171 Z M85.3724585,66.1881621 L113.556514,2.13767682 L104.074896,74.3117569 L85.3724585,66.1881621 Z M33.0246412,6.28140792 L57.4558328,31.758033 L45.4960639,46.2724569 L40.766858,48.4360353 L33.0246412,6.28140792 Z M32.5439298,6.7201497 L40.2574144,48.7177816 L17.1445877,66.7770276 L32.5439298,6.7201497 Z M110.8579,6.90886153 L84.8210217,66.0766265 L79.0668506,66.6887506 L110.8579,6.90886153 Z M0.720280482,66.991641 L31.7322458,7.66423744 L16.4633036,67.2141835 L0.720280482,66.991641 Z M46.0331346,46.475441 L62.8320652,26.0861062 L71.7279894,67.2622865 L65.7472762,67.8981978 L46.0331346,46.475441 Z M87.8323749,26.5634361 L97.9510743,30.0125808 L92.9710143,39.3768105 L87.8323749,26.5634361 Z M78.1921768,41.4743133 L87.306355,26.7267749 L92.5914181,39.9064722 C92.603574,39.9371313 92.6295435,39.9551039 92.6505401,39.9783625 L90.1453152,44.6898148 L78.1921768,41.4743133 Z M63.5575527,26.8314386 L83.6203482,56.9597838 L78.4120885,66.7532403 L72.2810838,67.2115405 L63.5575527,26.8314386 Z M74.256421,37.3934862 L86.2504475,27.3959882 L77.7285942,41.1872811 L74.256421,37.3934862 Z M65.1665546,28.2634283 L73.6574656,37.5420241 L77.5363096,41.7798468 L84.1557613,55.9517349 L83.9109852,56.4126781 L65.1665546,28.2634283 Z M121.908185,29.1234679 L134.17793,48.9329236 C134.18014,48.935038 134.183455,48.9360952 134.185665,48.9392669 L134.182903,48.9403241 L145.987407,66.5391555 L125.981524,74.355631 L121.908185,29.1234679 Z M107.697913,74.4423222 L121.38106,29.4263583 L125.43727,74.4713954 L107.697913,74.4423222 Z M134.650353,48.6580492 L122.815459,29.5521662 L162.622233,66.3996039 L146.550447,66.3996039 L134.650353,48.6580492 Z M78.2645598,42.0430918 L89.8894883,45.170845 L84.4778932,55.3459541 L78.2645598,42.0430918 Z M40.8663155,48.9767978 L45.6038096,46.8095191 L65.111853,68.0081476 L45.0783422,71.9076634 L40.8663155,48.9767978 Z M17.3214011,67.3214902 L40.3673702,49.3145761 L44.514197,71.8944482 L17.3214011,67.3214902 Z" />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <use fill="url(#LogoGradient)" xlinkHref="#TrvrslFooterIcon-path" />
    </g>
  </svg>
)

TrvrslFooterIcon.defaultProps = {
  width: 164,
  height: 75,
}

// -------------------------------------

export const TwitterIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 30 24" {...props}>
    <g stroke="none" strokeWidth="1" fill="#048bfa" fillRule="evenodd">
      <path d="M19.3971746,0 C15.8267131,0 13.06579,2.54215385 12.6504054,6.048 C9.68825153,5.45076923 6.99378999,3.88061538 5.05809768,1.57938462 C4.7054823,1.16030769 4.18763614,0.921230769 3.64578999,0.921230769 C3.59778999,0.921230769 3.54886691,0.923076923 3.49994384,0.926769231 C2.90640537,0.973846154 2.37194384,1.30430769 2.06455922,1.81476923 C1.42117461,2.88184615 1.0814823,4.10492308 1.0814823,5.35292308 C1.0814823,6.18461538 1.23102076,6.99507692 1.51440537,7.75384615 C1.21255922,8.08892308 1.03809768,8.52738462 1.03809768,8.99076923 L1.03809768,9.05815385 C1.03809768,10.8655385 1.7534823,12.5436923 2.94055922,13.8018462 C2.87225153,14.1175385 2.88702076,14.4507692 2.99225153,14.7673846 C3.40209768,16.0135385 4.14702076,17.0870769 5.11255922,17.904 C4.46363614,18.048 3.79440537,18.1209231 3.1094823,18.1209231 C2.74855922,18.1209231 2.39871307,18.1006154 2.07009768,18.06 C1.9934823,18.0516923 1.91871307,18.0470769 1.84486691,18.0470769 C1.07040537,18.0470769 0.367943836,18.5335385 0.10578999,19.2793846 C-0.183133087,20.0963077 0.135328452,21.0027692 0.871020759,21.4596923 C3.50086691,23.0981538 6.80178999,24 10.1664054,24 C16.5190208,24 20.4633285,21.0867692 22.65379,18.6415385 C25.3104054,15.6766154 26.8565592,11.7406154 26.9165592,7.80461538 C27.7787131,7.09107692 28.5374823,6.26769231 29.18179,5.34738462 C29.4153285,5.03815385 29.55379,4.65323077 29.55379,4.23692308 C29.55379,3.60830769 29.2399438,3.05353846 28.76179,2.71938462 C28.9685592,2.00861538 28.7313285,1.23876923 28.1525592,0.769846154 C27.8165592,0.495692308 27.4039438,0.356307692 26.9894823,0.356307692 C26.6719438,0.356307692 26.3525592,0.438461538 26.0664054,0.603692308 C25.4488669,0.96 24.7879438,1.24061538 24.0919438,1.44184615 C22.8144054,0.546461538 21.0799438,0 19.3971746,0 M27.7048669,4.23692308 L27.7094823,4.23692308 M19.3971746,1.84615385 C20.9220977,1.84615385 22.6528669,2.448 23.6230208,3.45046154 C24.8294823,3.21784615 25.9667131,2.79230769 26.9894823,2.20246154 C26.5944054,3.40430769 25.7525592,4.41138462 24.65779,5.04830769 C25.7285592,4.92184615 26.7550208,4.64769231 27.7048669,4.23692308 C26.9931746,5.268 26.0950208,6.17446154 25.0584054,6.90184615 C25.0676361,7.12153846 25.0722515,7.34307692 25.0722515,7.56461538 C25.0722515,14.3658462 19.9251746,22.1538462 10.1664054,22.1538462 C7.17194384,22.1538462 4.19132845,21.3535385 1.84578999,19.8932308 C2.26117461,19.9430769 2.68302076,19.9670769 3.1094823,19.9670769 C5.59625153,19.9670769 7.88363614,19.1446154 9.70117461,17.7618462 C7.37778999,17.7221538 5.41717461,16.2332308 4.74517461,14.1904615 C5.06825153,14.2504615 5.4014823,14.2827692 5.74394384,14.2827692 C6.22486691,14.2827692 6.69563614,14.2209231 7.13963614,14.1018462 C4.71286691,13.632 2.88425153,11.5513846 2.88425153,9.05815385 L2.88425153,8.99076923 C3.60055922,9.37661538 4.41655922,9.60923077 5.28794384,9.636 C3.86363614,8.712 2.92763614,7.13907692 2.92763614,5.35292308 C2.92763614,4.40953846 3.18886691,3.52430769 3.64578999,2.76738462 C6.26178999,5.87723077 10.1719438,7.92738462 14.5814823,8.14338462 C14.4900977,7.76676923 14.4430208,7.36984615 14.4430208,6.972 C14.4430208,4.12892308 16.4654823,1.84615385 19.3971746,1.84615385" />
    </g>
  </svg>
)

TwitterIcon.defaultProps = {
  width: 30,
  height: 24,
}

// -------------------------------------

export const XIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 26 26" {...props}>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M23.9984,0 L0,24" />
      <path d="M24,24 L0,0" />
    </g>
  </svg>
)

XIcon.defaultProps = {
  width: 26,
  height: 26,
}