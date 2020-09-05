const navLinks = () => [
    {title:'Home', route:'/', sub:null},
    {title:'About', route:'/about', sub:[{title:'Company',route:'/company'}, {title:'Business',route:'/business'}]}, 
    {title:'Items', route:'/blog', sub:[{title:'Found',route:'/found'}, {title:'Lost',route:'/lost'}, {title:'Tried', route:'/tried'}]}, 
    {title:'FAQ', route:'/FAQ', sub:null},
    {title:'Gallery', sub:null}
  ];

export default navLinks;