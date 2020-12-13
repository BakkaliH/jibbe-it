import React from 'react';
import ReactDOM from 'react-dom';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';
import Page from '../components/Page';

const DescriptionRenderer = ({ field }) => <date {...field} />;
 
let trips = [
  {
    id: 1,
    vehicle: 'Dacia Logan',
    size: '26*15*10',
    starttime: '18:00',
    finishtime: '20:00',
    day:15,
    startlocation: 'ESITH',
    destination: 'Hay Mohammadi',
  },
  {
    id:2,
    vehicle: 'Dacia Logan',
    size: '26*15*10',
    starttime: '20:00',
    finishtime: '21:00',
    day:4,
    startlocation: 'EHTP',
    destination: 'Bernoussi',
  },
];
 
const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
    const mapper = x => x[data.field];
    let sorter = SORTERS.STRING_ASCENDING(mapper);
   
    if (data.field === 'id') {
      sorter = data.direction === 'ascending' ?
        SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
    } else {
      sorter = data.direction === 'ascending' ?
        SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
    }
   
    return sorter;
  };
 
  let count = trips.length;
  const service = {
    fetchItems: (payload) => {
      let result = Array.from(trips);
      result = result.sort(getSorter(payload.sort));
      return Promise.resolve(result);
    },
    create: (trip) => {
      count += 1;
      trips.push({
        ...trip,
        id: count,
      });
      return Promise.resolve(trip);
    },
    update: (data) => {
      const trip = trips.find(t => t.id === data.id);
      trip.vehicle = data.vehicle;
      trip.size = data.size;
      trip.starttime = data.starttime;
      trip.finishtime = data.finishtime;
      trip.day = data.day;
      trip.startlocation = data.startlocation;
      trip.destination = data.destination;
      return Promise.resolve(trip);
    },
    delete: (data) => {
      const trip = trips.find(t => t.id === data.id);
      trips = trips.filter(t => t.id !== trip.id);
      return Promise.resolve(trip);
    },
  };
   
  const styles = {
    container: { margin: 'auto', width: 'fit-content' },
  };

export default function ScheduleTripPage() {

  return (
    <Page title="Schedule a Trip" breadcrumbs={[{ name: 'Transport', active: true }]}>
    <div style={styles.container}>
      <CRUDTable
        caption="Trips"
        fetchItems={payload => service.fetchItems(payload)}
      >
        <Fields>
          {/* <Field
            name="id"
            label="Id"
            hideInCreateForm
          /> */}
          <Field
            name="vehicle"
            label="Type Vehicle"
            placeholder="Type Vehicle"
          />
          <Field
            name="size"
            label="Empty Size"
            placeholder="x * y * z"
            // render={DescriptionRenderer}
          />
          <Field
            name="starttime"
            type="date"
            label="Earliest Start"
            placeholder="Earliest Start"
            // render={DescriptionRenderer}
          />
          <Field
            name="finishtime"
            label="Latest Arrival"
            placeholder="Latest Arrival"
            // render={DescriptionRenderer}
          />
          <Field
            name="day"
            label="Day"
            placeholder="Day"
            // render={DescriptionRenderer}
          />
          <Field
            name="startlocation"
            label="Start Location"
            placeholder="Start Location"
            // render={DescriptionRenderer}
          />
          <Field
            name="destination"
            label="Destination"
            placeholder="Destination"
            // render={DescriptionRenderer}
          />
        </Fields>
        <CreateForm
          title="Trip Creation"
          message="Create a new trip!"
          trigger="Create Trip"
          onSubmit={trip => service.create(trip)}
          submitText="Create"
          validate={(values) => {
            const errors = {};
            if (!values.vehicle) {
              errors.vehicle = 'Please, provide trip\'s Type of Vehicle';
            }
   
            if (!values.size) {
              errors.size = 'Please, provide trip\'s empty size';
            }
   
            return errors;
          }}
        />
   
        <UpdateForm
          title="Trip Update Process"
          message="Update trip"
          trigger="Update"
          onSubmit={trip => service.update(trip)}
          submitText="Update"
          validate={(values) => {
            const errors = {};
   
            if (!values.id) {
              errors.id = 'Please, provide id';
            }
   
            if (!values.vehicle) {
              errors.vehicle = 'Please, provide trip\'s type of vehicle';
            }
   
            if (!values.size) {
              errors.size = 'Please, provide trip\'s empty size';
            }
   
            return errors;
          }}
        />
        <DeleteForm
          title="Trip Delete Process"
          message="Are you sure you want to delete the trip?"
          trigger="Delete"
          onSubmit={trip => service.delete(trip)}
          submitText="Delete"
          validate={(values) => {
            const errors = {};
            if (!values.id) {
              errors.id = 'Please, provide id';
            }
            return errors;
          }}
        />
      </CRUDTable>
    </div>
    </Page>
  );
        }
  ScheduleTripPage.propTypes = {};
   
//   ReactDOM.render(
//     <ScheduleTripPage />,
//     document.getElementById('root')
//   );

