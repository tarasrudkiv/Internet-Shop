export interface IProduct {
  id?: number;
  productName: string;
  description: string;
  price: number;
  status: string;
  category: string;
  components: Component[];
  // image?:File;
  imageName?:string;
}
interface Component {
  componentName: string;
  component_id: string;
  componentValues: ComponentValues[];
}
interface ComponentValues {
  propertyName: string;
  propertyValue: string;
}

