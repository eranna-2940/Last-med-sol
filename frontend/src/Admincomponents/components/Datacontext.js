// DataContext.js
import axios from 'axios';
import React, { createContext, useContext, useState ,useEffect} from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);
  const [user, setUser] = useState(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || { firstname: '',lastname:'', email:'' };
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [guest_plans, setGuest_plans] = useState(JSON.parse(sessionStorage.getItem("guest_plans")) || []);


  const setUserData = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  const [doctor, setDoctor] = useState(() => {
    const storedDoctor = JSON.parse(localStorage.getItem('doctor'));
      return storedDoctor || { firstname: '',lastname:'', email:'', hospital:'', specialization:'' };
    });
  
    const setDoctorData = (userData) => {
      setDoctor(userData);
    };
    useEffect(() => {
      localStorage.setItem('doctor', JSON.stringify(doctor));
    }, [doctor]);

    const [labagent, setLabagent] = useState(() => {
      const storedLabagent = JSON.parse(localStorage.getItem('labagent'));
        return storedLabagent || { firstname: '',lastname:'', email:'', labname:'' };
      });
    
      const setLabagentData = (userData) => {
        setLabagent(userData);
      };
      useEffect(() => {
        localStorage.setItem('labagent', JSON.stringify(labagent));
      }, [labagent]);
    
      const [superadmin, setSuperadmin] = useState(() => {
        const storedSuperadmin = JSON.parse(localStorage.getItem('superadmin'));
          return storedSuperadmin || { email:'', password:'' };
        });
      
        const setSuperadminData = (userData) => {
          setSuperadmin(userData);
        };
        useEffect(() => {
          localStorage.setItem('superadmin', JSON.stringify(superadmin));
        }, [superadmin]);

        const [admin, setAdmin] = useState(() => {
          const storedAdmin = JSON.parse(localStorage.getItem('admin'));
            return storedAdmin || { email:'', password:'' };
          });
        
          const setAdminData = (userData) => {
            setAdmin(userData);
          };
          useEffect(() => {
            localStorage.setItem('admin', JSON.stringify(admin));
          }, [admin]);
          const [front, setFront] = useState(() => {
            const storedFront = JSON.parse(localStorage.getItem('front'));
              return storedFront || { email:'', password:'' };
            });
          
            const setFrontData = (userData) => {
              setFront(userData);
            };
            useEffect(() => {
              localStorage.setItem('front', JSON.stringify(front));
            }, [front]);
  const addToData = (newItem) => {
    setData([...data, newItem]);
  };

  // const addToCart = (item) => {
  //   if(cartItems.length>0 && item.planName === cartItems[0].planName){
  //     alert("plan already exists")
  //   }
  //   else{
  //     alert("Plan added to cart")

  //       setCartItems([
  //         { ...item},
  //       ]);
  //   }
  // };

  const addToCart = (item) => {
    const isItemInCart = cartItems.some(existingItem => existingItem.planName === item.planName);
    
    if (isItemInCart) {
      setNotification({message:'Product already exists in the cart' , type: 'error'});
      setTimeout(() => setNotification(null), 3000);
    } else {
      // Check if logged-in user has a token and update cart accordingly
      const patientToken = localStorage.getItem("patient-token");  // Patient token from local storage
      if (patientToken) {
        item.patient_token = patientToken;  // Attach the patient token to the item
  
        // Send item with token to backend to update cart
        axios
          .post(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/addcart`, { product: item })
          .then((response) => {
            // Update cartItems state with the new item
            setCartItems((prevItems) => [...prevItems, item]);
            setNotification({ message:"Product added to cart" , type: 'success'});
            setTimeout(() => setNotification(null), 3000);
          })
          .catch((error) => {
            console.error("Error adding to cart:", error);
          });
          
      } else {
        console.log("User is not logged in. Unable to add to cart.");
      }
    }
  };
  
  

 
  const removeFromCart = (productId) => {
    if(isLoggedIn){
    axios
      .delete(`${process.env.REACT_APP_HOST}${process.env.REACT_APP_PORT}/products/${productId}`)
      .then((response) => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.id !== productId)
        );
        setNotification({ message:"Product removed from cart!" , type:'success'});
        setTimeout(() => setNotification(null), 3000);
      })
      .catch((error) => {
        console.error("Error removing product from cart:", error);
      });
    }
    else{
      const updated_guest_product = guest_plans.filter(item => item.id !== productId);
      sessionStorage.setItem("guest_plans", JSON.stringify(updated_guest_product));
      setNotification({ message:"Product removed from cart!" , type:'success'});
      setTimeout(() => setNotification(null), 3000);
      window.location.reload(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, addToData, front, setFront,cartItems,setFrontData, addToCart,guest_plans,setGuest_plans, removeFromCart, user, setUserData, doctor, setDoctorData, labagent, setLabagentData, superadmin, setSuperadminData, admin, setAdminData,isLoggedIn,setIsLoggedIn, notification,
      setNotification,}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
