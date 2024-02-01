import "../styles/header.css"

const Header = (props) => {
    return (
        <>
        <nav id="topHeader">
        <div className="partner-brands">
        <a className="partner-brands">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="5.003 13.06 239.999 223.884"><path d="M135.377 28.32a12.9 12.9 0 0 1-.189-1.504c-.492-7.083 4.84-13.225 11.922-13.724 7.09-.494 13.23 4.845 13.725 11.928s-4.839 13.225-11.921 13.724c-.448.034-.892.04-1.326.023-.287.074-.459.109-.706.327-.729 1.136 1.854.924.098 5.889 0 0-.012.545-.207 1.09-.138 1.906-.871 7.554-.976 10.562.373.436.478.648.437 1.705-.166 1.429-.494 4.931-1.021 7.175-.447 1.923-1.232 2.29-1.865 2.761-.89 3.984-1.125 7.284-3.408 12.123-.207 3.668-.465 4.667-1.234 6.458-.086 5.401.287 6.205-3.357 14.757-.941 4-.046 6.767.947 10.923 1.016 4.271 3.834 6.056 4.253 10.43.987 10.301.74 17.314-1.47 25.391l1.929 4.568c2.394 1.098 8.334 4.1 5.04 8.852 4.639 2.438 11.646 5.027 17.426 9.971 2.325 1.936 4.781 4.047 6.985 6.525 4.196.654 3.748.987 6.858 2.898 9.145 5.607 23.81 16.73 32.311 24.605 1.464.855 2.061 1.471 3.243 2.091.185.354.235.436.194.532-.406 1.028-.391 1.058-.758 1.877.459.507 1.314.981 1.825 1.425.478.149.478-.08 1.298-.281 1.067.999 2.389 1.804 2.863 1.757 1.447-.367 1.2-.068 2.423-1.436.44-.453 1.177.006 1.177.006.459-.539 1.446-1.613 2.762-2.389 1.05-.619 3.054-.688 3.054-.688.671.006.545.694.487.918-.758.391-2.364.821-3.266 1.486-1.964 2.031-3.502 4.771-3.502 4.771 3.954-.54 6.383.441 9.678.063 1.797-.104 3.123.012 5.01-1.354 0 0 1.814-1.291 3.439-1.976 1.578-.688 3.076-.321 4.465.688.981 1.107 1.572 1.113.08 2.676-.539.607-1.32 1.285-2.312 2.267-1.745 1.724-4.094 4.022-6.526 5.924-2.463 1.923-5.258 3.65-7.003 4.442-4.402 3.163-3.363 2.336-6.824 5.471-.437.391-1.596 1.09-2.158 1.463-1.365.896-1.791.149-2.681-1.492 0 0-.407-.613-1.079-1.923-.734-1.429-1.285-3.063-1.062-3.036-.82-.104-4.512-4.432-4.521-5.36-.781-.179-4.111-3.403-4.23-4.019l-2.95-2.365c-3.375.701-4.149-1.395-13.063-7.72-1.017-.018-2.588-.567-4.84-2.237-4.022-3.222-13.672-10.511-15.308-11.344-1.757-.895-3.856-1.738-5.144-2.801-1.929-.355-2.984-.557-3.949-.826-.986-.27-1.883-.619-4.379-.953-4.063-.505-8.277-2.187-12.289-4.195-1.899-.9-3.553-1.359-5.188-2.062-3.668-1.549-6.813-2.944-9.25-3.507-.93-.092-5.35-1.418-7.668-2.771-.804-.414-1.269-.81-1.797-.931-1.217-.28-1.998.201-2.548.386-2.973 1.549-5.757 2.887-8.329 4.271-2.394 1.28-4.598 2.61-6.934 3.955-2.107 1.217-4.541 2.364-7.043 3.559 0 0-7.135 3.576-11.032 4.966-3.381 2.76-10.292 7.535-14.51 9.9-2.089.993-6.147 3.564-8.019 4.139-1.068.86-4.873 3.575-7.852 5.814-2.302 1.722-4.041 3.174-4.041 3.174-1.337 1.199-1.246 1.768-3.788.688-.706.58-1.251.941-1.705 1.274-1.836 1.332-1.992 1.011-2.663.976-1.28 1.108-1.441.535-2.56 1.81-.735 1.138.017.866-1.533 1.418-.327.126-.482.521-.734.74-1.246 1.026-1.251 3.926-4.236 4.133-1.728 1.233-1.286 2.722-2.606 2.657.081 1.279-2.336 3.146-2.772 3.14-3.806 1.313-4.07-1.485-8.639.603-.591.271-1.458 1.018-2.6 1.234-2.009.379-4.437-.018-5.918-1.165-2.331-1.797-4.477-5.264-4.477-5.264-.741-1.751-.31-2.858 2.003-4.513.964-.613 1.142-1.072 2.761-1.183.804-.304.585.161 2.021-.354.832-.299.832-.086 2.508-.229.384-.259.924-.351 1.647-.586 1.326-.437 2.618-.924 2.618-.924s.338-.339 1.613-.218c1.079-.442 2.187-1.098 2.755-1.299-.144-1.709.04-1.629.832-2.317.987-.851 1.165-.712 1.9-.185.31-.179.459-.24.425-.5-.121-.89-.884-1.309-.654-3.271-.339-.786-.838-1.756-.729-2.342.161-.632.316-.937.7-1.138.408-.217.54.076.758.321.39.454.706 1.798.706 1.798.138 1.516.608 3.479 2.106 2.371.884-.896 1.056-3.283 2.858-2.772l1.286 1.118c1.091-1.026 1.143-1.026 1.797-1.439 0 0-1.022-1.033-.126-1.837.614-.546 1.354-.937 2.669-2.394 3.61-3.989 5.464-5.752 9.368-8.967 7.789-6.406 16.651-10.899 22.282-13.133 1.836-2.331 3.622-3.88 7.697-4.271 4.844-8.18 14.12-15.485 16.25-16.65 1.733-3.141 2.485-2.807 4.752-3.438 1.796-1.44 2.204-1.44 3.008-2.944.781-3.104-1.802-11.399 4.792-11.818 1.401-1.979 1.051-1.504 2.612-3.375-1.056-2.606-1.492-4.786-1.779-6.664-.052-.218-2.617-2.026-1.889-4.386-1.09-1.297-3.128-4.324-3.765-5.742-.292.006-.534-.104-.855-.148-.333-.053-.747-.034-1.211-.074-1.027 2.65-2.146 2.847-3.972 3.432-3.26 6.948-4.408 9.889-13.632 15.633-3.662 4.1-4.833 8.668-4.816 8.6-.631 1.354-.408 3.249-.075 4.265-.482 1.504-.356 1.653-.356 1.653.201.568.724 1.32 1.366 1.48 1.108.293 2.216.246 2.152 1.48-.149 1.544-2.175 1.291-3.134 1.119-3.691-.586-2.525-2.991-4.885-2.188-1.808 1.183-2.485 4.673-5.436 4.22-.39-.258-.27-1.021-.006-1.572.414-.861 1.148-1.573.712-1.896a583.852 583.852 0 0 0-5.763 1.878c-1.808.493-3.789-.408-2.009-1.597.827-.321 2.009-.724 3.467-1.658 0 0 .751-1.022-.689-.511-1.573.562-3.892.912-5.556.729 0 0-3.45-.453-3.892-.724-.448-.271-.855-1.337.224-1.331 1.366.012 4.787-.391 7.439-1.097 1.28-.499 3.714-1.939 5.08-2.617 0 0 1.481-2.158 2.296-2.583 1.36-1.566 2.508-2.491 3.713-4.093 1.177-2.429 2.394-6.273 6.291-12.226 1.802-2.744 4.041-5.94 6.859-8.798 0 0 .729-4.574 4.397-7.829.81-1.906 2.038-4.15 3.249-6.228.471-.798.918-1.492 1.366-2.25 1.137-1.785 2.331-5.108 6.762-5.631 0 0 1.894-1.4 2.623-2.395 1.137-.97.878-2.479 1.802-3.542-1.412-1.377-5.022-3.966-5.373-7.565-.373-3.817.987-6.957 3.295-9.281 2.56-2.56 5.258-3.84 8.535-3.645 4.092.608 4.867 1.963 6.17 3.306 1.251 1.274 1.716.454 2.244 1.946 3.433.913 3.243.511 3.214 3.037.528.711 1.412 1.372 1.4 2.847 1.154-2.394 1.383-2.835 4.466-5.47.729-2.141 1.224-4.247 1.864-6.388.601-1.98 1.348-4.018 1.927-5.551-.614-4.328.647-5.045 2.33-8.839-.298-.522-.234-.671-.108-1.527.654-2.508 1.676-5.826 2.284-7.99 0 0 .201-.861 1.091-.924.77-2.738 1.924-7.835 2.118-8.874.792-2.864.281-3.783-.327-5.396-.195-.528-.104-1.28-.441-1.866-.959-1.67-1.991-3.84-2.691-5.39-.454-.987-1.172-4.707-1.172-4.707-.616-1.899-.082.001-.082.001"/></svg>
        </a>
        <a className="partner-brands"> 
        <svg xmlns="http://www.w3.org/2000/svg" height="27" width="30" viewBox="-16.71 -23.5 144.82 141"><path d="M19.3 36.7L0 30.4 12.1 47 .2 63.5l19.1-6.3 11.6 16.6V53.3L50.4 47l-19.5-6.4V20.2z"/><path d="M74.7 47L31.9 94h36.7l42.8-47L68.6 0H31.9z"/></svg>
        </a>
        </div>
        <div className="links">
            <div className="link">Find a Store</div><p>|</p>
            <div className="dropdown link">Help
            <div className="dropdown-content">
            <h2>Help</h2>
            <a >Order Status</a>
            <a >Shipping & Delivery</a>
            <a >Returns</a>
            <a >Order Cancellation</a>
            <a >Size Charts</a>
            <a >Contact Us</a>
            <a >Membership</a>
            <a >Promotions & Discounts</a>
            <a >Product Advice</a>
            <a >Send Us Feedback</a>
        </div>
            </div><p>|</p>
            <div className="link">Join Us</div><p>|</p>
            <div className="link">Sign in</div>
        </div>
        
        </nav>
        

        {/* <div class="navbar">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <div class="dropdown">
	  <button class="btn">Dropdown</button>
	  <div class="dropdown-menu">
		<a href="#">courses</a>
		<a href="#">Menu</a>
		<a href="#">Link </a>
	  </div>
    </div>
  </div> */}
        </>
    )
}

export default Header;