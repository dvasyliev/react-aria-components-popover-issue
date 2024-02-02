import { 
  Button, 
  Label, 
  ListBox, 
  ListBoxItem, 
  Popover, 
  DialogTrigger,
  Select, 
  SelectValue
} from 'react-aria-components';

export const SelectWithHint = () => {
  return (
    <Select>
      <Label elementType='label' style={{ display: 'block' }}>
        Favorite Animal
      </Label>

      <DialogTrigger>
        <Button>(?)</Button>
        <Popover>
          It's hint for Select
        </Popover>
      </DialogTrigger>
      <br></br>

      {/* <DialogTrigger> */}
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>

        <Popover style={{ width: 'var(--trigger-width)' }}>
          <ListBox>
            <ListBoxItem>Aardvark</ListBoxItem>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
            <ListBoxItem>Panda</ListBoxItem>
            <ListBoxItem>Snake</ListBoxItem>
          </ListBox>
        </Popover>
      {/* </DialogTrigger> */}
    </Select>
  )
}
