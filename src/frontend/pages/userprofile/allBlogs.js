import React, { useEffect, useState } from "react";
import { Col, Image, Row, Pagination } from 'react-bootstrap';
import axios from "axios";
import API from "../../../utils";
import { EditorState, convertToRaw } from 'draft-js';
import News1 from '../../../assets/img/news1.jpg'
import News2 from '../../../assets/img/news2.jpg'
import EditBlogModal from "./editNewsModal";
import { useNavigate } from "react-router-dom";
function AllBlogs() {
  const navigate = useNavigate();
  const [hotelEditorState, setHotelEditorState] = useState(EditorState.createEmpty());
  const [blogEditorState, setBlogEditorState] = useState(EditorState.createEmpty());
  const [apiData, setApiData] = useState([]);
  const[blogId, setBlogId]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [image, setImage] = useState(null)


  const [formData, setFormData] = useState({
    businessName: '',
    country: '',
    fullName: '',
    email: '',
    blogTitle: '',
    youtubeLink: '',
    image: [],
    hotelDescription: 'fffdff',
    offerTitle: '',
    offerCountry: '',
    phoneNumber: '',
    link: '',
    offerValidTo: '',
    offerValidFrom: '',
    blogContent: 'ffffff',
    user_id: 2,
  });


  const handleHotelEditorChange = (editorState) => {
    setHotelEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    setFormData({
      ...formData,
      hotelDescription: JSON.stringify(contentRaw),
    });
  };
  
  const handleOfferEditorChange = (editorState) => {
    setBlogEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    setFormData({
      ...formData,
      blogContent: JSON.stringify(contentRaw),
    });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target || {};;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleimageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    setImage(file);

  };
  
  

  const fetchAllNewsData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${API.BASE_URL}${API.ENDPOINTS.allNews}`, {
        headers: {
          "Authorization": "Bearer " + token,
        }
      });
      const data = response.data;
      if (data.status === true) {
        setApiData(data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchAllNewsData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModal = (id) => {
    setShowEditModal(!showEditModal);
  };

  // Step 5: Trigger the modal to open when the "Edit" button is clicked
  const handleEditButtonClick = (news) => {
    setBlogId(news.id);  
    handleEditModal(news.id);


  };
  const handleViewButtonClick = (news) => {
    // Navigate to the room-details page with the news id in the URL
    navigate(`/blog-details/${news.id}`);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return (
    <>
     {/* <Row className='hotel-profile-div mt-4' >
          <Col lg={4}>
            <div className='image-div'>
              <Image src={News1} />
            </div>
          </Col>

          <Col lg={8}>
            <div className='details-div mt-4'>
              <div className='mb-3'>
                <h4>The Ritz-Carlton, Doha</h4>
                <h6>Created at : 2023-08-30</h6>
                <h5>Package expiry: 2024-01-30</h5>
              </div>
              <Row className='mt-5'>
                <Col lg={8} className='mt-2'>
                  <div className='time-left '>
                    <span>Time Left :75d 11h 36m 6s</span>
                  </div>
                </Col>
                <Col lg={4} className='mt-2'>
                  <div className='d-flex all-hotel-btns'>
                  <button className='me-1 btn-default' >View</button>
                    <button className='me-1 btn-default'   >Edit</button>
                    <button className='me-1 btn-default' >Delete</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
    
      
        <Row className='hotel-profile-div mt-4' >
          <Col lg={4}>
            <div className='image-div'>
              <Image src={News2} />
            </div>
          </Col>

          <Col lg={8}>
            <div className='details-div mt-4'>
              <div className='mb-3'>
                <h4>Symphony Style Hotel, Quorvus Collection</h4>
                <h6>Created at : 2023-08-30</h6>
                <h5>Package expiry: 2024-01-30</h5>
              </div>
              <Row className='mt-5'>
                <Col lg={8} className='mt-2'>
                  <div className='time-left '>
                    <span>Time Left :75d 11h 36m 6s</span>
                  </div>
                </Col>
                <Col lg={4} className='mt-2'>
                  <div className='d-flex all-hotel-btns'>
                  <button className='me-1 btn-default' >View</button>
                    <button className='me-1 btn-default'   >Edit</button>
                    <button className='me-1 btn-default' >Delete</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row> */}
    {currentPosts.map((news) => (
        <Row className='hotel-profile-div mt-4' key={news.id}>
          <Col lg={4}>
            <div className='image-div'>
              <Image src={News1} alt={news.news_title} />
            </div>
          </Col>
          <Col lg={8}>
            <div className='details-div mt-4'>
              <div className='mb-3'>
                <h4>{news.news_title}</h4>
                <h6>Created at {news.created_at}</h6>
                <h5>Package expiry: {news.updated_at}</h5>
              </div>
              <Row className='mt-5'>
                <Col lg={8} className='mt-2'>
                  <div className='time-left '>
                    <span>Time Left: {formatDate(news.created_at)}</span>
                  </div>
                </Col>
                <Col lg={4} className='mt-2'>
                  <div className='d-flex all-hotel-btns'>
                    <button className='me-1 btn-default'onClick={() => handleViewButtonClick(news)}>View</button>
                    <button className='me-1 btn-default'  onClick={() => handleEditButtonClick(news)}>Edit</button>
                    <button className='me-1 btn-default'>Delete</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      ))}
     
      <div className="col-lg-12">
        <div className="room-pagination">
          {apiData.length > postsPerPage &&
            Array.from({ length: Math.ceil(apiData.length / postsPerPage) }).map((_, index) => (
              <a
                key={index}
                href="#"
                className={index + 1 === currentPage ? 'active' : ''}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </a>
            ))}
          {/* Example: Next page button */}
          <a onClick={() => paginate(currentPage + 1)}>Next <i className="fa fa-long-arrow-right"></i></a>
        </div>
      </div>

      <EditBlogModal
        show={showEditModal}
        handleClose={handleEditModal}
        // handleEditSubmit={handleEditSubmit}
        formData={formData}
        news_id={blogId} 
        handleInputChange={handleInputChange}
        handleHotelEditorChange={handleHotelEditorChange}
        handleOfferEditorChange={handleOfferEditorChange}
      />
    </>
  );
}

export default AllBlogs;
