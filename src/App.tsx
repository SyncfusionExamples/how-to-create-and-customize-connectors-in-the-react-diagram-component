import { DiagramComponent, NodeModel, ConnectorModel, DiagramTools} from "@syncfusion/ej2-react-diagrams";
import './App.css';
import {useRef, useState} from 'react';


function App() {
  const diagramRef = useRef<DiagramComponent>(null);
  const nodeCollection : NodeModel[] = [
    {
      id: 'node1',
      width: 160,
      height: 60,
      offsetX: 500,
      offsetY: 190,
      shape:{
        shape:"Rectangle",
        type:"Basic"
      },
      style:{
        fill:"#32a899",
        strokeColor:"#32a899"
      }
    },
    {
      id: 'node2',
      width: 200,
      height: 60,
      offsetX: 700,
      offsetY: 400,
      shape:{
        shape:"Parallelogram",
        type:"Basic"
      },
      style:{
        fill:"#32a899",
        strokeColor:"#32a899"
      }
    },
    {
      id: 'node3',
      width: 160,
      height: 60,
      offsetX: 750,
      offsetY: 300,
      shape:{
        shape:"Ellipse",
        type:"Basic"
      },
      style:{
        fill:"#32a899",
        strokeColor:"#32a899"
      }
    }
  ]
  const [connectorCollection, setConnectorCollection ] = useState<ConnectorModel[]>([
    {
      id:'connector1',
      sourceID:'node1',
      targetID :'node2',
      type:"Straight" //"Orthogonal"
    }
  ]); 
  /**
   * Add a Connector when used
   */
  const addConnector = () =>
  {
    const newConnector : ConnectorModel = {
      id:'connector2',
      sourceID:'node2',
      targetID :'node3'
    }
    setConnectorCollection([...connectorCollection,newConnector]);
  }

  /**
   * Multi Functional method. Can customize a connector style, remove connector and can enable drawing connectors.
   */
  const editConnector = () =>{
    // if(diagramRef.current){
    //   if(diagramRef.current.tool === DiagramTools.ContinuousDraw){
    //     diagramRef.current.tool = DiagramTools.Default;
    //   }
    //   else{
    //     diagramRef.current.tool = DiagramTools.ContinuousDraw;
    //     diagramRef.current.drawingObject = {
    //       type : 'Straight',
    //       id:'drawn_connector',
    //       style:{strokeColor:'black'}
    //     }
    //   }
    // }
    if(connectorCollection.length > 0){
      const newConnectorCollection = [...connectorCollection];
      const updatedConnector = {
        ...newConnectorCollection[0],
        style :{
          ...newConnectorCollection[0].style,
          strokeColor : 'red'
        }
      }
      newConnectorCollection[0] = updatedConnector;
      setConnectorCollection(newConnectorCollection);
      // diagramRef.current?.remove(connectorCollection[0]);
      // const newConnectors = connectorCollection.splice(1);
      // setConnectorCollection(newConnectors);
    }
  }
  
  return (
    <div>
      <div>
        <button onClick={addConnector}> Add Connector</button>
        <button onClick={editConnector}>Edit Connector</button>
      </div>
      <DiagramComponent 
        id="container"
        ref={diagramRef}
        width={"100%"}
        height={"750px"}
        nodes={nodeCollection}
        connectors={connectorCollection}
      />
    </div>
  );
}

export default App;
