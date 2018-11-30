import moment from 'moment';

// Import defaults that will be parametrized
import DefaultApp from 'indico/modules/rb_new/components/App';
import DefaultBookingBootstrapForm from 'indico/modules/rb_new/components/BookingBootstrapForm';
import DefaultMenu from 'indico/modules/rb_new/components/Menu';
import DefaultBookingFilterBar from 'indico/modules/rb_new/modules/bookRoom/BookingFilterBar';
import {RoomFilterBarBase} from 'indico/modules/rb_new/modules/roomList/RoomFilterBar';
import DefaultBookRoomModal from 'indico/modules/rb_new/modules/bookRoom/BookRoomModal';
import DefaultTimeInformation from 'indico/modules/rb_new/components/TimeInformation';
import DefaultBookRoom from 'indico/modules/rb_new/modules/bookRoom/BookRoom';
import DefaultRoomBookingMap from 'indico/modules/rb_new/common/map/RoomBookingMap';
import DefaultRoomDetailsModal from 'indico/modules/rb_new/common/rooms/RoomDetailsModal';
import DefaultLandingStatistics from 'indico/modules/rb_new/modules/landing/LandingStatistics';
import {Translate} from 'indico/react/i18n';
import {parametrize} from 'indico/react/util';
import MapMarkers from './components/MapMarkers';


const App = parametrize(DefaultApp, {
    title: Translate.string('Burotel'),
    iconName: 'keyboard'
});

const BookingBootstrapForm = parametrize(DefaultBookingBootstrapForm, () => ({
    dayBased: true,
    defaults: {
        recurrence: {
            type: 'daily'
        },
        dates: {
            endDate: moment().add(7, 'd')
        }
    }
}));

const BookingFilterBar = parametrize(DefaultBookingFilterBar, {
    dayBased: true
});

const RoomFilterBar = parametrize(RoomFilterBarBase, {
    hideOptions: {
        capacity: true
    }
});

const BookRoom = parametrize(DefaultBookRoom, {
    showSuggestions: false
});

const TimeInformation = parametrize(DefaultTimeInformation, {
    timeSlot: null
});

const LandingStatistics = parametrize(DefaultLandingStatistics, () => ({
    labels: {
        activeRooms: Translate.string('Desks in use')
    }
}));

const RoomBookingMap = parametrize(DefaultRoomBookingMap, {
    markerComponent: MapMarkers
});

const Menu = parametrize(DefaultMenu, () => ({
    labels: {
        bookRoom: Translate.string('Book a Desk'),
        roomList: Translate.string('List of Spaces')
    }
}));

const RoomDetailsModal = parametrize(DefaultRoomDetailsModal, () => ({
    title: Translate.string('Desk Details')
}));

const BookRoomModal = parametrize(DefaultBookRoomModal, () => ({
    defaultTitles: {
        booking: Translate.string('Book a Desk'),
        preBooking: Translate.string('Pre-book a Desk')
    }
}));

export default {
    App,
    BookingBootstrapForm,
    BookingFilterBar,
    RoomFilterBar,
    BookRoom,
    TimeInformation,
    LandingStatistics,
    Menu,
    RoomBookingMap,
    RoomDetailsModal,
    BookRoomModal
};