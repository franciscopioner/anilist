import { ToggleButton, ToggleLabel, ToggleWrapper, Input, Slider, Switch } from "./styles";

interface ToggleProps {
  action: () => void;
  value: boolean;
  values: { off: string; on: string };
}

const Toggle: React.FC<ToggleProps> = ({ action, value, values }) => {
  return (
    <ToggleWrapper>
      <ToggleLabel>{value ? values.on : values.off}</ToggleLabel>
      <ToggleButton>
        <Input type="checkbox" onChange={action} checked={value} />
        <Slider $checked={value} />
        <Switch $checked={value} />
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default Toggle;
