/* apikey 79006359bd1544d3899418d29f53d001 */

import NewsList from "@components/NewsList"

export default function Home() {
  return (
    <section className = "w-full flex-center flex-col">
      
      <h3 className="head_text text-center orange_gradient">
          Discover the Latest News 
          
          <br className = "max-md:hidden" />
      
      </h3>
    
    {/* Displaying the list of news articles fetched from the api */} 
    
    <NewsList />
      
    </section>
  )
}
