import "./App.css";
import './css/index.css';
import './css/phone.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/frontPage/Navbar";
import Hero from "./pages/frontPage/Hero";
import About from "./pages/frontPage/About";
import Gallery from "./pages/frontPage/Gallery";
import Process from "./pages/frontPage/Process";
import Blog from "./pages/frontPage/Blog";
import Contact from "./pages/frontPage/Contact";
import Login from "./pages/signInUp/Login";
import SignUp from "./pages/signInUp/SignUp";
import Dashboard from "./pages/user/dashboard/Dashboard";
import Profile from "./pages/user/profile/Profile";
import BloodBank from "./pages/user/bloodBank/BloodBank";
import Donor from "./pages/user/donors/Donor";
import SiteLayout from "./components/layouts/SiteLayout";
import AdminSiteLayout from "./components/layouts/AdminSiteLayout";
import SignInUp from "./components/layouts/SignInUp";
import BloodRequest from "./pages/user/dashboard/BloodRequest";
import BloodDonor from "./pages/user/dashboard/BloodDonor";
import UsersProfile from "./pages/user/profile/UsersProfile";
import EmergencyRequest from "./pages/frontPage/EmergencyRequest";
import Footer from "./components/Footer";
import RequestBlood from "./pages/user/request/RequestBlood";
import Conversation from "./pages/user/conversation/Conversation";
import ViewBloodRecived from "./pages/user/profile/ViewBloodRecived";
import ViewBloodDonation from "./pages/user/profile/ViewBloodDonation";
import RequestBloodBody from "./pages/user/request/RequestBloodBody";
import RequestStatus from "./pages/user/request/RequestStatus";
import Notification from "./pages/user/notification/Notification";
import DonationRequest from "./pages/user/dashboard/DonationRequest";
import ConfirmStatus from "./pages/user/dashboard/ConfirmStatus";
import FriendList from "./pages/user/profile/FriendList";
import DonorNotification from "./pages/user/notification/DonorNotification";
import RecieverNotification from "./pages/user/notification/RecieverNotification";
import FriendListNotification from "./pages/user/notification/FriendListNotification";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import ViewRecentUsers from "./pages/admin/dashboard/ViewRecentUsers";
import AdminUsersProfileView from "./pages/admin/profile/AdminUsersProfile";
import UsersList from "./pages/admin/users List/UsersList";
import RequestList from "./pages/admin/request list/RequestList";
import DonationDetails from "./pages/admin/request list/DonationDetails";
import AdminNotification from "./pages/admin/notification/AdminNotification";
import AdminProfile from "./pages/admin/profile/AdminProfile";
import EmailVerification from "./pages/admin/e-mail verification/EmailVerification";
import AdminConversation from "./pages/admin/conversation/AdminConversation";
import AdminDonor from "./pages/admin/donor/AdminDonor";
import AdminBloodBank from "./pages/admin/blood bank/AdminBloodBank";
import AddBloodBank from "./pages/admin/blood bank/AddBloodBank";

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

        <Route path="/adminDashboard" element={
          <AdminSiteLayout>
              <AdminDashboard/>
          </AdminSiteLayout>
        }/>

        <Route path="/recentUsers" element={
          <AdminSiteLayout>
              <ViewRecentUsers/>
          </AdminSiteLayout>
        }/>

        <Route path="/adminUsersProfile" element={
          <AdminSiteLayout>
            <AdminUsersProfileView/>
          </AdminSiteLayout>
        }/>

        <Route path="/usersList" element={
          <AdminSiteLayout>
            <UsersList/>
          </AdminSiteLayout>
        }
        />

        <Route path="/requestList" element={
          <AdminSiteLayout>
            <RequestList/>
          </AdminSiteLayout>
        }/>

        <Route path="/donationDetails" element={
          <AdminSiteLayout>
            <DonationDetails/>
          </AdminSiteLayout>
        }/>

        <Route path="/adminNotification" element={
          <AdminSiteLayout>
            <AdminNotification/>
          </AdminSiteLayout>
        }/>

        <Route path="/adminProfile" element={
          <AdminSiteLayout>
            <AdminProfile/>
          </AdminSiteLayout>
        }/>

        <Route path="/emailVerification" element={
          <AdminSiteLayout>
            <EmailVerification/>
          </AdminSiteLayout>
        }
        />

        <Route path="/adminConversation" element={
          <AdminSiteLayout>
            <AdminConversation/>
          </AdminSiteLayout>
        }
        />

        <Route path="/adminDonor" element={
          <AdminSiteLayout>
            <AdminDonor/>
          </AdminSiteLayout>
        }/>

        <Route path="/adminBloodBank" element={
          <AdminSiteLayout>
            <AdminBloodBank/>
          </AdminSiteLayout>
        }
        />

        <Route path="/addBloodBank" element={
          <AdminSiteLayout>
            <AddBloodBank/>
          </AdminSiteLayout>
        }
        />

          <Route
            path="/"
            element={
              <>
                {/* <Navbar /> */}
                <Hero />
                <About />
                <Gallery />
                <Process/>
                <Blog/>
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
