import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

export const SurveyPopup = ({
  titleCollapsed,
  titleExpanded,
  description,
  noThanksText,
  takeSurveyText,
  ariaLabel,
  openButtonLabel,
  closeButtonLabel,
  optionsGroupLabel
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  const popupRef = useRef(null);
  const noThanksRef = useRef(null);
  const takeSurveyRef = useRef(null);

  // Handle keyboard interactions
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  // Focus management
  useEffect(() => {
    if (isOpen && noThanksRef.current) {
      noThanksRef.current.focus();
    }
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={popupRef}
      role="complementary"
      aria-label={ariaLabel || t('surveyPopup.ariaLabel')}
      onKeyDown={handleKeyDown}
      className={`fixed bottom-0 right-0 transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3.5rem)]'}`}
    >
      <div className="layout-container">
        <div className="col-start-8 col-span-5 ml-auto">
          <div className="max-w-[416px] bg-custom-blue-dark text-white pl-6 pr-6 pt-3 pb-6 rounded-t-lg shadow-lg">
            <button 
              onClick={togglePopup}
              className="w-full flex items-center justify-between text-left mb-4 text-[25px] font-display"
              aria-expanded={isOpen}
              aria-controls="survey-content"
              aria-label={isOpen ? (closeButtonLabel || t('surveyPopup.closeButtonLabel')) : (openButtonLabel || t('surveyPopup.openButtonLabel'))}
            >
              <span className="transition-opacity duration-300 ease-in-out">
                {isOpen ? (titleExpanded || t('surveyPopup.titleExpanded')) : (titleCollapsed || t('surveyPopup.titleCollapsed'))}
              </span>
              <span 
                className="transform transition-transform duration-300 self-start" 
                aria-hidden="true"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="M18 15l-6-6-6 6"/></svg>
              </span>
            </button>
            
            <div 
              id="survey-content"
              role="region"
              aria-hidden={!isOpen}
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? 'min-h-[180px] max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="mb-6">
                {description || t('surveyPopup.description')}
              </p>
              <div 
                className="pl-1 flex gap-4 text-[20px]"
                role="group"
                aria-label={optionsGroupLabel || t('surveyPopup.optionsGroupLabel')}
              >
                <button 
                  ref={noThanksRef}
                  className="px-4 py-2 text-nowrap text-white underline hover:bg-white hover:text-custom-blue-dark transition-colors focus:outline-none focus:ring-4 focus:ring-white"
                  onClick={() => setIsOpen(false)}
                >
                  {noThanksText || t('surveyPopup.noThanksButton')}
                </button>
                <button 
                  ref={takeSurveyRef}
                  className="px-4 py-2 bg-white text-custom-blue-dark hover:bg-gray-100 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {takeSurveyText || t('surveyPopup.takeSurveyButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SurveyPopup.propTypes = {
  /**
   * Text shown in the collapsed state
   */
  titleCollapsed: PropTypes.string,
  /**
   * Text shown in the expanded state
   */
  titleExpanded: PropTypes.string,
  /**
   * Description text shown in the expanded state
   */
  description: PropTypes.string,
  /**
   * Text for the "No thanks" button
   */
  noThanksText: PropTypes.string,
  /**
   * Text for the "Take the survey" button
   */
  takeSurveyText: PropTypes.string,
  /**
   * ARIA label for the popup container
   */
  ariaLabel: PropTypes.string,
  /**
   * ARIA label for the open button state
   */
  openButtonLabel: PropTypes.string,
  /**
   * ARIA label for the close button state
   */
  closeButtonLabel: PropTypes.string,
  /**
   * ARIA label for the options group
   */
  optionsGroupLabel: PropTypes.string
};

export default SurveyPopup;
