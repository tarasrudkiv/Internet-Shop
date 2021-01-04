export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  status: string;
  category: string;
  components: Component[];
}
interface Component {
  componentName: string;
  component_id: string;
  componentValues: ComponentValues[];
}
interface ComponentValues {
  propertyName: string;
  propertyValue: number;
}

