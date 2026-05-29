import { useState, useCallback } from 'react';
import NeonBackground from './components/NeonBackground.jsx';
import ToastContainer from './components/ToastContainer.jsx';
import SuccessModal from './components/SuccessModal.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import PrizeSection from './components/PrizeSection.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import Footer from './components/Footer.jsx';
import { DEMO_MODE } from './constants/settings.js';
import {
  getDemoDb,
  addDemoRegistration,
  deleteDemoRegistration,
  approveDemoRegistration,
} from './constants/demoData.js';
import { genId } from './utils/helpers.js';

function App() {
  const [page, setPage] = useState('home');
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [regs, setRegs] = useState(getDemoDb());
  const [toasts, setToasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successSquad, setSuccessSquad] = useState(null);

  const addToast = useCallback((title, msg, type = 'info') => {
    const id = Date.now();
    setToasts((previous) => [...previous, { id, title, msg, type }]);
    setTimeout(() => {
      setToasts((previous) => previous.filter((toast) => toast.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((previous) => previous.filter((toast) => toast.id !== id));
  }, []);

  const handleSubmit = async (form) => {
    setLoading(true);

    try {
      if (DEMO_MODE) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const newReg = {
          id: genId(),
          ...form,
          paymentStatus: 'pending',
          competitionAllowed: false,
          time: new Date().toISOString(),
        };
        const next = addDemoRegistration(newReg);
        setRegs(next);
      } else {
        // Real Firebase call – uncomment and configure.
        // const id = await firebaseAdd(form);
        // const newReg = { id, ...form, paymentStatus: 'pending', competitionAllowed: false, time: new Date().toISOString() };
        // setRegs((existing) => [newReg, ...existing]);
      }

      setSuccessSquad(form.squadName);
      addToast('Registration Complete!', `${form.squadName} is now in the tournament!`, 'success');
    } catch (error) {
      console.error(error);
      addToast('Error!', 'Registration failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleAllowCompetition = async (id) => {
    try {
      if (DEMO_MODE) {
        const next = approveDemoRegistration(id);
        setRegs(next);
        addToast('Approved!', 'Squad approved for competition.', 'success');
      }
    } catch (error) {
      console.error(error);
      addToast('Error!', 'Could not approve squad.', 'error');
    }
  };

  const handleVerifyPayment = async (id) => {
    try {
      if (DEMO_MODE) {
        const next = regs.map((registration) =>
          registration.id === id ? { ...registration, paymentStatus: 'paid' } : registration,
        );
        setRegs(next);
        addToast('Payment Verified', 'The payment status has been updated.', 'success');
      }
    } catch (error) {
      console.error(error);
      addToast('Error!', 'Could not verify payment.', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      if (DEMO_MODE) {
        const next = deleteDemoRegistration(id);
        setRegs(next);
      } else {
        // await firebaseDelete(id);
        // setRegs((existing) => existing.filter((entry) => entry.id !== id));
      }
      addToast('Deleted', 'Squad removed from the tournament.', 'error');
    } catch (error) {
      console.error(error);
      addToast('Error!', 'Could not delete. Try again.', 'error');
    }
  };

  const scrollToReg = () => {
    setTimeout(() => {
      const el = document.getElementById('register');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (page === 'admin') {
    return (
      <>
        <NeonBackground />
        <div style={{ position: 'relative', zIndex: 2, paddingTop: 20 }}>
          {!isAdminAuth ? (
            <AdminLogin onLogin={() => setIsAdminAuth(true)} />
          ) : (
            <AdminPanel
              regs={regs}
              onDelete={handleDelete}
              onVerifyPayment={handleVerifyPayment}
              onAllowCompetition={handleAllowCompetition}
              onBack={() => {
                setPage('home');
                setIsAdminAuth(false);
              }}
              onLogout={() => {
                setPage('home');
                setIsAdminAuth(false);
              }}
            />
          )}
        </div>
        <ToastContainer toasts={toasts} remove={removeToast} />
      </>
    );
  }

  return (
    <>
      <NeonBackground />
      <Navbar onRegister={scrollToReg} onAdmin={() => setPage('admin')} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection onRegister={scrollToReg} onAdmin={() => setPage('admin')} />
        <PrizeSection />
        <HowItWorks />
        <RegistrationForm onSubmit={handleSubmit} loading={loading} />
        <Footer />
      </div>
      {successSquad && <SuccessModal squad={successSquad} onClose={() => setSuccessSquad(null)} />}
      <ToastContainer toasts={toasts} remove={removeToast} />
    </>
  );
}

export default App;
