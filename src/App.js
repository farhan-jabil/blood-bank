import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/frontPage/Navbar";
import Home from "./pages/frontPage/Home";
import About from "./pages/frontPage/About";
import Gallery from "./pages/frontPage/Gallery";
import Contact from "./pages/frontPage/Contact";
import Login from "./pages/signInUp/Login";
import SignUp from "./pages/signInUp/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import BloodBank from "./pages/bloodBank/BloodBank";
import Donor from "./pages/donors/Donor";
import SiteLayout from "./components/layouts/SiteLayout";
import SignInUp from "./components/layouts/SignInUp";
import BloodRequest from "./pages/dashboard/BloodRequest";
import BloodDonor from "./pages/dashboard/BloodDonor";
import UsersProfile from "./pages/profile/UsersProfile";
import EmergencyRequest from "./pages/frontPage/EmergencyRequest";
import Footer from "./components/Footer";
import RequestBlood from "./pages/request/RequestBlood";
import Conversation from "./pages/conversation/Conversation";
import ViewBloodRecived from "./pages/profile/ViewBloodRecived";
import ViewBloodDonation from "./pages/profile/ViewBloodDonation";
import RequestBloodBody from "./pages/request/RequestBloodBody";
import RequestStatus from "./pages/request/RequestStatus";
import Notification from "./pages/notification/Notification";
import DonationRequest from "./pages/dashboard/DonationRequest";
import ConfirmStatus from "./pages/dashboard/ConfirmStatus";
import FriendList from "./pages/profile/FriendList";
import DonorNotification from "./pages/notification/DonorNotification";
import RecieverNotification from "./pages/notification/RecieverNotification";
import FriendListNotification from "./pages/notification/FriendListNotification";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/emergencyRequest" element={<EmergencyRequest/>}></Route>
          <Route path="/login" element={
          <SignInUp>
              <Login/>
            </SignInUp>
          }/>

          <Route path="/signup" element={
            <SignInUp>
              <SignUp/>
            </SignInUp>
          }/>

          <Route path="/dashboard" element={
              <SiteLayout>
                <Dashboard />
              </SiteLayout>
            }/>

          <Route path="/bloodRequest" element={
              <SiteLayout>
                <BloodRequest />
              </SiteLayout>
            }/>

          <Route path="/bloodDonor" element={
              <SiteLayout>
                <BloodDonor />
              </SiteLayout>
            }
          />

          <Route path="/bloodBank" element={
              <SiteLayout>
                <BloodBank />
              </SiteLayout>
            }/>

          <Route path="/usersProfile" element={
              <SiteLayout>
                <UsersProfile />
              </SiteLayout>
            }
            />

          <Route path="/profile" element={
              <SiteLayout>
                <Profile/>
              </SiteLayout>
            }
          />
          <Route
            path="/donor"
            element={
              <SiteLayout>
                <Donor />
              </SiteLayout>
            }
          />

          <Route path="/requestBlood" element={
            <SiteLayout>
              <RequestBlood>
              <RequestBloodBody/>
              </RequestBlood>
            </SiteLayout>
          }/>

          <Route path="/requestStatus" element={
            <SiteLayout>
              <RequestBlood>
              <RequestStatus/>
              </RequestBlood>
            </SiteLayout>
          }/>

          {/* <Route path="/bloodStatus" element={
            <SiteLayout>
              <BloodStatus/>
            </SiteLayout>
          }/> */}

          <Route path="/friendList" element={
            <SiteLayout>
              <FriendList/>
            </SiteLayout>
          }
          />

          <Route path="/conversation" element={
            <SiteLayout>
              <Conversation/>
            </SiteLayout>
          }/>

          <Route path="/viewBloodRecived" element={
            <SiteLayout>
              <ViewBloodRecived/>
            </SiteLayout>
          }/>

          <Route path="/viewBloodDonation" element={
            <SiteLayout>
              <ViewBloodDonation/>
            </SiteLayout>
          }/>

        <Route path="/notification" element={
          <SiteLayout>
            <Notification/>
          </SiteLayout>
        }/>

        <Route path="/donationRequest" element={
          <SiteLayout>
            <DonationRequest/>
          </SiteLayout>
        }/>


        <Route path="/confirmStatus" element={
          <SiteLayout>
            <ConfirmStatus/>
          </SiteLayout>
        }/>

        <Route path="/donorNotification" element={
          <SiteLayout>
            <Notification>
            <DonorNotification/>
            </Notification>
          </SiteLayout>
        }/>

        <Route path="/recieverNotification" element={
          <SiteLayout>
            <Notification>
            <RecieverNotification/>
            </Notification>
          </SiteLayout>
        }/>

        <Route path="/friendNotification" element={
          <SiteLayout>
            <Notification>
              <FriendListNotification/>
            </Notification>
          </SiteLayout>
        }/>

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Gallery />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
