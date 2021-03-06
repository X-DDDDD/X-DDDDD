const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      'â'.repeat(passedProgressBarIndex) +
      'â'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
## Hi there đ

Hi there, I'm **nobody**, **an ordinary engineering student**.



### Something I want you know:

- đ I like programming and basketball;
- đ I'm learning reinforcement learning;
- đŤ Please email me if you have any questions or interests about RL.

---


âł Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

â° Updated on ${new Date().toUTCString()}

---

### Languages and Tools:

![](https://img.shields.io/badge/tool-VS--Code-blue) 
![](https://img.shields.io/badge/tool-ML--agents-orange) 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white)
![Microsoft Edge](https://img.shields.io/badge/Microsoft_Edge-0078D7?style=flat-square&logo=Microsoft-Edge&logoColor=white)

     

[![GitHub stats](https://github-readme-stats.vercel.app/api?username=X-DDDDD&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)  

![Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=X-DDDDD&layout=compact&hide_border=true&langs_count=10)  

---

### Contact me:

- đ äżŽćšćĽćďź2021-10-05  
- đ¤ My blog   : [![CSDN](https://img.shields.io/badge/@whatever_ittakes-FF8800?style=flat-square&logo=Micro.blog&logoColor=white)](https://blog.csdn.net/whatever_ittakes)        
- đŤ My E-mail : [![Email](https://img.shields.io/badge/1336143736@qq.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:1336143736@qq.com)         


### My GitHub Contributions:  

![](https://raw.githubusercontent.com/X-DDDDD/X-DDDDD/main/assets/github-contribution-grid-snake.svg)  


`

console.log(readme)
