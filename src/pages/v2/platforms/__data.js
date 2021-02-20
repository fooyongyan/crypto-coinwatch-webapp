/** 
 * @typedef Stat 
 * @property {string} label
 * @property {string} value
 * 
 * @typedef Platform
 * @property {string} title
 * @property {Stat[]} stats
 */
const data = [ 
    {
      title: "Etoro",
      link: "https://www.etoro.com/",
      imgUrl: "https://www.etoro.com/wp-content/uploads/2018/05/eToro-share-img.png",
      description: "For more than a decade, eToro has been a leader in the global Fintech revolution. It is the world’s leading social trading network, with millions of registered users and an array of innovative trading and investment tools.",
      yearStarted: 2017,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Pancake Swap",
      link: "https://pancakeswap.finance/",
      imgUrl: "https://gblobscdn.gitbook.com/spaces%2F-MHREX7DHcljbY5IkjgJ%2Favatar-1602750187173.png?alt=media",
      yearStarted: 2021,
      description: "Pancake Swap is a crypto swap exchange, running on Binance Smart Chain. What I do is to use this to yield interest by participating in Farming and Staking on the platform",
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Celsius Network",
      link: "https://celsius.network/",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-e3CJ2SAAUwDUyHLtZK46Rrw4ms9lJHfQ&usqp=CAU",
      description: "An economy where financial freedom doesn’t come with a price tag. Where the interests of the people are put first. Where ethical behavior is the baseline, and where everyone – and we mean everyone – has the opportunity to succeed financially. With a little bit of humanity and honesty, and the power of a digital currency that’s as strong as it is accessible, we’re ushering in the new economy today.",
      yearStarted: 2019,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Kebab Finance",
      link: "https://kebabfinance.com/#/",
      imgUrl: "data:image/png;base64,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",
      description: "Kebab Swap is a crypto swap exchange, running on Binance Smart Chain. It is a Pancake Swap clone focusing on BUSD pairs",
      yearStarted: 2021,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Asian Income Fund",
      link: "https://www.income.com.sg/funds/asian-income-fund",
      imgUrl: "https://image.useinsider.com/ntucincome/permission-screen/syFnOEnCZdHfJ8sT4FZp1608091176.png",
      description: "NTUC Income is an isurance company. I use it to buy Funds, which provides long-term growth, while earning a little bit of interest on a monthly basis",
      yearStarted: 2020,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Prudential",
      link: "https://www.prudential.com.sg/company",
      imgUrl: "https://cdn.techinasia.com/data/images/fNCocxWDi7MN0u3SOvYRPFQQU1tnjiBy7OQcxO7k.png",
      description: "Prudential Assurance Company Singapore, an indirect wholly-owned subsidiary of UK-based Prudential Plc, is one of Singapore’s leading life insurance companies. We are one of the market leaders in protection, savings and investment-linked plans, with S$43.1 billion funds under management as at 31 December 2019. In testament to our financial strength, we have an ‘AA-’ financial strength rating from leading credit rating agency Standard & Poor’s.",
      yearStarted: 2015,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "Manulife",
      link: "https://www.prudential.com.sg/company",
      imgUrl: "https://logodix.com/logo/484634.jpg",
      description: "Prudential Assurance Company Singapore, an indirect wholly-owned subsidiary of UK-based Prudential Plc, is one of Singapore’s leading life insurance companies. We are one of the market leaders in protection, savings and investment-linked plans, with S$43.1 billion funds under management as at 31 December 2019. In testament to our financial strength, we have an ‘AA-’ financial strength rating from leading credit rating agency Standard & Poor’s.",
      yearStarted: 2020,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }, 
    {
      title: "乌龙茶",
      link: "https://www.prudential.com.sg/company",
      imgUrl: "https://scontent.fsin7-1.fna.fbcdn.net/v/t1.0-9/133814469_10158078528466025_8302275787059344333_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=VPIk_06xua0AX8HP8SM&_nc_ht=scontent.fsin7-1.fna&oh=c0dc0ab18e3cd2d4a6d0de1a5d536442&oe=6054F194",
      description: "I've married her, and the exposure is just... I don't think it will ever be recovered...",
      yearStarted: 2017,
      stats: [
        { label: "Exposure", value: "2,000" },
        { label: "Value", value: "1250" },
        { label: "P/L", value: "-850" }
      ]
    }
  ]


  export default data;
  