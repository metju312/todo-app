import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {TextMdMedium, TextMdNormal, TextMdSemiBold} from "../../common/typography/typography.config";
import CheckBox from "../../common/components/form/CheckBox";
import TrashIcon from "../../common/icons/TrashIcon";
import {useRouter} from "next/router";

function TodoElement({element, selected}) {
  const router = useRouter();

  const [checked, setChecked] = useState(selected);

  const handleCheckboxChange = () => {
    setChecked((prevState => {
      return !prevState;
    }));
  }

  const goToTodoElementDetails = (id) => {
    router.push(`/todo/${id}`);
  }

  useEffect(() => {
    console.log('handleCheckboxChange', checked)
  }, [checked])

  return (
    <Container selected={checked} onClick={handleCheckboxChange}>
      <Content>
        <Row>
          <Column>
            <CheckBox
              checked={checked}
            />
          </Column>
          <ColumnTitleAndDescription>
            <Title selected={checked}>
              <TextMdSemiBold>
                {element.title}
              </TextMdSemiBold>
            </Title>
            <Description selected={checked}>
              <TextMdNormal>
                {element.description}
              </TextMdNormal>
            </Description>
          </ColumnTitleAndDescription>
          <StyledTrashIcon selected={checked} onClick={() => goToTodoElementDetails(element.id)}>
            <TrashIcon />
          </StyledTrashIcon>
        </Row>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 768px;
  padding: 16px;
  background: ${props => props.selected ? props.theme.color.primary[100] : "transparent"};
  border: 1px solid ${props => props.theme.color.primary[300]};
  border-radius: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${props => props.theme.color.primary[700]};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
`

const Title = styled.span`
  color: ${props => props.selected ? props.theme.color.primary[700] : props.theme.color.gray[600] };
  margin-bottom: 2px;
`

const Description = styled.span`
  color: ${props => props.selected ? props.theme.color.primary[600] : props.theme.color.gray[500] };
`

const StyledTrashIcon = styled.svg`
  display: inline;
  width: 24px;
  height: 24px;
  path {
    stroke: ${props => props.selected ? props.theme.color.primary[600] : props.theme.color.gray[500] };
  }
`

export default TodoElement;