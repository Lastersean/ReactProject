const Listgroup = () => {
    const items = ['Atlanta', 'Los Angelas', 'New York', 'Charlotte', 'Albany']
  return (
    <>
     <h2>Listgroup</h2>
    <ul className="list-group">
        {items.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
  
 
</ul>
    </>
   
  )
}

export default Listgroup