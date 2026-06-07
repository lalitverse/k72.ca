import React from 'react'

const Blogue = () => {
  const articles = [
    {
      title: "Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme",
      date: "3 octobre 2025",
      image: "https://k72.ca/uploads/blog/blogImg/K72_article_ChatGPT_blogue-1280x960.jpg",
      tags: ["Création", "Tech & IA"]
    },
    {
      title: "Pub prédictive: L’IA révolutionne le ciblage",
      date: "9 mai 2025",
      image: "https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png",
      tags: ["Tech & IA"]
    },
    {
      title: "Conseil & relation client: un duo qui ne se briefe pas, qui se construit",
      date: "9 mai 2025",
      image: "https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif",
      tags: ["Conseil"]
    }
  ]

  return (
    <div className='bg-white text-black min-h-screen pt-40 px-4 md:px-10 lg:px-20 font-[font2] pb-20'>
      <div className='mb-20'>
        <h1 className='text-6xl md:text-8xl lg:text-[9vw] leading-[0.9] uppercase'>
          Blogue
        </h1>
      </div>

      <div className='mb-10'>
        <p className='text-lg mb-4'>Catégories :</p>
        <div className='flex flex-wrap gap-4'>
          <button className='px-6 py-2 rounded-full bg-[#D3FD50] text-black'>Tout</button>
          <button className='px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors'>Création</button>
          <button className='px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors'>Tech & IA</button>
          <button className='px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors'>Conseil</button>
        </div>
      </div>

      <div className='flex flex-col gap-20'>
        {articles.map((article, index) => (
          <article key={index} className='group cursor-pointer'>
            <div className='w-full overflow-hidden rounded-xl mb-6'>
              <img src={article.image} alt={article.title} className='w-full h-[50vh] md:h-[70vh] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out' />
            </div>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
              <div>
                <p className='text-sm text-gray-500 mb-2'>• {article.date}</p>
                <h2 className='text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-tight group-hover:text-gray-600 transition-colors'>{article.title}</h2>
              </div>
              <div className='flex gap-2 flex-wrap'>
                {article.tags.map((tag, tIndex) => (
                  <span key={tIndex} className='px-4 py-2 border border-black rounded-full text-sm'>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blogue
