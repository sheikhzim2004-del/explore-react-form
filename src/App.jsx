
import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FamilyTree from './components/familyTree/FamilyTree'
import GrandPa from './components/familyTree/GrandPa'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
        <div>
          <h1>Explore React Form</h1>
          {/* <SimpleForm></SimpleForm> */}
          {/* <FormAction></FormAction> */}
          {/* <ControlledField></ControlledField> */}
          {/* <UnControlledField></UnControlledField> */}
          {/* <HookForm></HookForm> */}
          {/* <ProductManagement></ProductManagement> */}
          <FamilyTree></FamilyTree>
        </div>
    </>
  )
}

export default App
