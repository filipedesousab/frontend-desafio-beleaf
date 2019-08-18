import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

import {
  Button,
  FadeSpinner,
  Input,
  Label,
  Photograph,
  Tab,
  Tabs,
  TextArea,
} from 'common/ui-elements';
import { Box, Content, Grid } from 'common/ui-layout';
import { convertURLBlobToBase64, masks } from 'common/utils';
import imageNoPhoto from 'images/no-photo.jpg';

/**
 * Campos do formulário para cadastrar e atualizar cliente
 * @param {!function} props.addAlertPopup Chama um AlertPopup
 * @param  {!boolean} props.errors        Objeto com mensagem de erro caso falhe a validação
 * @param {!function} props.handleChange  Executa ao alterar um campo
 * @param {!function} props.setFieldValue ALtera os valor de um campo
 * @param   {!object} props.values        Valores iniciais dos campos
 */
class AddLunchBoxComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'description',
      isSubmitting: false,
    };

    this.image = ''; // Photo a cadastrar

    this.validationSchema = Yup.object({ // Esquema de validação
      lunchBoxName: Yup.string('Enter a name')
        .required('Nome é obrigatório'),
      lunchBoxPrice: Yup.string('Enter a price')
        .required('Preço é obrigatório'),
      lunchBoxDiscount: Yup.string('Enter a discount')
        .required('Desconto é obrigatório'),
      lunchBoxQuantity: Yup.string('Enter a quantity')
        .required('Quantidade é obrigatório'),
      lunchBoxDescription: Yup.string('Enter a description')
        .required('Descrição é obrigatório'),
      lunchBoxIngredients: Yup.string('Enter a ingredients')
        .required('Ingredientes é obrigatório'),
    });

    this.initialValues = {
      lunchBoxName: '',
      lunchBoxPrice: '',
      lunchBoxDiscount: '',
      lunchBoxQuantity: '',
      lunchBoxDescription: '',
      lunchBoxIngredients: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { user, history } = this.props;
    if (!user.id) history.replace('/');
  }

  componentWillReceiveProps({ user, history }) {
    if (!user.id) history.replace('/');
  }

  handleSubmit(formValues) {
    const { insertLunchBox, history } = this.props;

    this.setState({ isSubmitting: true }); // Indica que está submetendo exibindo o Spinner

    insertLunchBox( // Chama a Action Creator para cadastrar a nova cliente
      { // Dados de cadastro
        name: formValues.lunchBoxName,
        price: formValues.lunchBoxPrice.replace('R$ ', '').replace(',', '.'),
        discount: formValues.lunchBoxDiscount,
        quantity: formValues.lunchBoxQuantity,
        description: formValues.lunchBoxDescription,
        ingredients: formValues.lunchBoxIngredients,
        image: this.image,
      },
      history,
      () => this.setState({ isSubmitting: false }),
    );
  }


  render() {
    const { selectedTab, isSubmitting } = this.state;

    return (
      <Content
        breadcrumb={[{ label: 'Adicionar Marmita', href: '#' }]}
        className="lunchbox"
      >
        <Box color="muted">
          <Formik
            initialValues={this.initialValues}
            validationSchema={this.validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={this.handleSubmit}
            render={({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid.Row>
                  <Grid.Col md={3}>
                    <Photograph
                      noWebcam
                      defaultImage={imageNoPhoto}
                      onCapture={img => convertURLBlobToBase64(img)
                        .then((image) => { this.image = image; })
                      }
                    />
                  </Grid.Col>
                  <Grid.Col md={8}>
                    <div className="lunchbox">
                      <Input
                        label={<Label>Nome da marmita</Label>}
                        name="lunchBoxName"
                        placeholder="Insira o nome da marmita"
                        value={values.lunchBoxName}
                        state={errors.lunchBoxName ? 'error' : null}
                        helpBlock={errors.lunchBoxName || null}
                        onChange={handleChange}
                      />
                      <br />
                      <MaskedInput
                        keepCharPositions
                        label={<Label>Preço da marmita (R$)</Label>}
                        name="lunchBoxPrice"
                        placeholder="Insira o preço da marmita"
                        value={values.lunchBoxPrice}
                        state={errors.lunchBoxPrice ? 'error' : null}
                        helpBlock={errors.lunchBoxPrice || null}
                        onChange={handleChange}
                        mask={masks.currency()}
                        guide={false}
                        render={(ref, props) => <Input _ref={ref} {...props} />}
                      />
                      <Input
                        label={<Label>Desconto da marmita (%)</Label>}
                        name="lunchBoxDiscount"
                        placeholder="Insira o desconto da marmita"
                        value={values.lunchBoxDiscount}
                        state={errors.lunchBoxDiscount ? 'error' : null}
                        helpBlock={errors.lunchBoxDiscount || null}
                        onChange={handleChange}
                        type="number"
                      />
                      <br />
                      <Input
                        label={<Label>Quantidade em estoque</Label>}
                        name="lunchBoxQuantity"
                        placeholder="Insira a quantidade de marmitas"
                        value={values.lunchBoxQuantity}
                        state={errors.lunchBoxQuantity ? 'error' : null}
                        helpBlock={errors.lunchBoxQuantity || null}
                        onChange={handleChange}
                        type="number"
                      />
                    </div>
                  </Grid.Col>
                </Grid.Row>
                <br />
                <br />
                <Tabs activeKey={selectedTab} onSelect={key => this.setState({ selectedTab: key })}>
                  <Tab eventKey="description" title="Detalhes">
                    <TextArea
                      label={<Label>Descrição da marmita</Label>}
                      id="lunchBoxDescription"
                      placeholder="Insira a descrição da marmita"
                      className="description"
                      blockInput
                      value={values.lunchBoxDescription}
                      state={errors.lunchBoxDescription ? 'error' : null}
                      helpBlock={errors.lunchBoxDescription || null}
                      onChange={handleChange}
                    />
                  </Tab>
                  <Tab eventKey="ingredients" title="Ingredientes">
                    <TextArea
                      label={<Label>Ingredientes da marmita</Label>}
                      id="lunchBoxIngredients"
                      placeholder="Insira os ingredientes da marmita"
                      className="description"
                      blockInput
                      value={values.lunchBoxIngredients}
                      state={errors.lunchBoxIngredients ? 'error' : null}
                      helpBlock={errors.lunchBoxIngredients || null}
                      onChange={handleChange}
                    />
                  </Tab>
                </Tabs>
                <br />
                <Button color="primary" type="submit">
                  <Label>Inserir Marmita</Label>
                </Button>
              </form>
            )}
          />
        </Box>
        {isSubmitting && <FadeSpinner />}
      </Content>
    );
  }
}

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AddLunchBoxComponent.propTypes = {
};

export default AddLunchBoxComponent;
